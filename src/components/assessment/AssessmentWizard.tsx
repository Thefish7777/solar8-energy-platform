import "./ApplianceSelector.css";
import { useEffect, useMemo, useRef, useState } from "react";
import "./AssessmentWizard.css";

import ApplianceSelector from "./ApplianceSelector";
import LiveRecommendation from "../recommendation/LiveRecommendation";
import { generateRecommendation } from "../../lib/recommendation/recommendationEngine";
import { calculateLoad } from "../../lib/recommendation/loadCalculator";
import type { AssessmentAnswers } from "../../lib/recommendation/recommendationTypes";

const TOTAL_STEPS = 7;
const ASSESSMENT_EMAIL = "info@solar8.co.za";
const WHATSAPP_NUMBER = "27813393346";

interface ContactDetails {
    name: string;
    phone: string;
    email: string;
    address: string;
    message: string;
}

export default function AssessmentWizard() {
    const [step, setStep] = useState(1);
    const assessmentCardRef = useRef<HTMLDivElement>(null);
    const [answers, setAnswers] = useState<AssessmentAnswers>({
        propertyType: "home",
        monthlyBill: 3500,
        occupants: 4,
        goal: "backup",
        backupHours: 8,
        appliances: []
    });

    const [contact, setContact] = useState<ContactDetails>({
        name: "",
        phone: "",
        email: "",
        address: "",
        message: ""
    });

    const recommendation = useMemo(() => generateRecommendation(answers), [answers]);
    const load = useMemo(() => calculateLoad(answers), [answers]);
    const progress = (step / TOTAL_STEPS) * 100;

    useEffect(() => {
        const card = assessmentCardRef.current;
        if (!card) return;

        const top = card.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }, [step]);

    function updateContact(field: keyof ContactDetails, value: string) {
        setContact((current) => ({ ...current, [field]: value }));
    }

    function canContinue() {
        if (step === 3) return answers.occupants >= 1 && answers.occupants <= 20;
        if (step === 7) {
            return Boolean(contact.name.trim() && contact.phone.trim() && contact.email.trim() && contact.address.trim());
        }
        return true;
    }

    function nextStep() {
        if (!canContinue()) return;
        setStep((current) => Math.min(TOTAL_STEPS, current + 1));
    }

    function previousStep() {
        setStep((current) => Math.max(1, current - 1));
    }

    const emailSubject = `Solar8 FREE Assessment - ${contact.name || "New Enquiry"}`;
    const emailBody = [
        "SOLAR8 FREE SOLAR ASSESSMENT",
        "",
        `Name: ${contact.name}`,
        `Phone: ${contact.phone}`,
        `Email: ${contact.email}`,
        `Property address: ${contact.address}`,
        "",
        `Property type: ${answers.propertyType}`,
        `Monthly electricity bill: R${answers.monthlyBill.toLocaleString("en-ZA")}`,
        `Occupants / users: ${answers.occupants}`,
        `Solar goal: ${answers.goal}`,
        `Backup requirement: ${answers.backupHours} hours`,
        `Running load: ${load.runningLoad.toFixed(2)} kW`,
        `Critical load: ${load.criticalLoad.toFixed(2)} kW`,
        `Peak load: ${load.peakLoad.toFixed(2)} kW`,
        `Recommended solution: ${recommendation.solution}`,
        `Recommended inverter: ${recommendation.configuration.inverter.name}`,
        `Recommended battery: ${recommendation.configuration.batteryQuantity} × ${recommendation.configuration.battery.model}`,
        `Recommended panels: ${recommendation.configuration.panelQuantity} × ${recommendation.configuration.panel.model}`,
        "",
        `Customer message: ${contact.message || "None"}`
    ].join("\n");

    const mailtoHref = `mailto:${ASSESSMENT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    const whatsappMessage = `Hi Solar8, I have completed the FREE Solar Assessment. My name is ${contact.name || "a prospective customer"}. I would like to discuss my recommendation.`;
    const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section className="assessment" aria-labelledby="assessment-title">
            <div ref={assessmentCardRef} className="assessment-card">
                <div className="assessment-header">
                    <div>
                        <span className="assessment-eyebrow">SOLAR8 ASSESSMENT</span>
                        <h2 id="assessment-title">FREE Solar Assessment</h2>
                    </div>
                    <span className="assessment-step">Step {step} of {TOTAL_STEPS}</span>
                </div>

                <div className="progress-track" aria-label={`Assessment progress: ${Math.round(progress)}%`}>
                    <div className="progress-fill" style={{ width: `${progress}%` }} />
                </div>

                <div className="progress-labels" aria-hidden="true">
                    <span>Property</span><span>Usage</span><span>Goals</span><span>Appliances</span><span>Recommendation</span><span>Details</span><span>Submit</span>
                </div>

                {step === 1 && (
                    <div className="assessment-step-content">
                        <span className="step-number">01</span>
                        <h3>What type of property do you have?</h3>
                        <p className="assessment-question">Choose the property type you want Solar8 to assess.</p>
                        <div className="assessment-options">
                            {[
                                ["home", "⌂", "Home", "Residential property"],
                                ["business", "▦", "Business", "Commercial premises"],
                                ["farm", "✦", "Farm", "Agricultural property"]
                            ].map(([value, icon, title, description]) => (
                                <button
                                    key={value}
                                    type="button"
                                    className={`assessment-option ${answers.propertyType === value ? "active" : ""}`}
                                    aria-pressed={answers.propertyType === value}
                                    onClick={() => setAnswers((current) => ({ ...current, propertyType: value as AssessmentAnswers["propertyType"] }))}
                                >
                                    <span className="assessment-option-icon" aria-hidden="true">{icon}</span>
                                    <span className="assessment-option-title">{title}</span>
                                    <span className="assessment-option-description">{description}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="assessment-step-content">
                        <span className="step-number">02</span>
                        <h3>What is your average monthly electricity bill?</h3>
                        <p className="assessment-question">This gives Solar8 a starting point for estimating your energy consumption.</p>
                        <div className="bill-control">
                            <div className="bill-value">R{answers.monthlyBill.toLocaleString("en-ZA")}</div>
                            <input className="slider" type="range" min="500" max="10000" step="100" value={answers.monthlyBill} aria-label="Average monthly electricity bill" onChange={(e) => setAnswers((current) => ({ ...current, monthlyBill: Number(e.target.value) }))} />
                            <div className="slider-labels"><span>R500</span><span>R10,000+</span></div>
                        </div>
                        <p className="assessment-help">Use the closest estimate. Your final recommendation will be refined during the site assessment.</p>
                    </div>
                )}

                {step === 3 && (
                    <div className="assessment-step-content">
                        <span className="step-number">03</span>
                        <h3>How many people live or work at the property?</h3>
                        <p className="assessment-question">This helps us estimate typical electricity demand.</p>
                        <div className="occupants-control">
                            <label htmlFor="occupants">Number of occupants / regular users</label>
                            <input id="occupants" className="number-input" type="number" min="1" max="20" value={answers.occupants} onChange={(e) => setAnswers((current) => ({ ...current, occupants: Math.max(1, Math.min(20, Number(e.target.value) || 1)) }))} />
                            <p className="assessment-help">Enter a number between 1 and 20.</p>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="assessment-step-content">
                        <span className="step-number">04</span>
                        <h3>What is your main solar goal?</h3>
                        <p className="assessment-question">Choose the option that best describes what you want your Solar8 system to achieve.</p>
                        <div className="assessment-options">
                            {[
                                ["backup", "▣", "Backup Power", "Keep essential appliances running during outages."],
                                ["save", "R", "Reduce My Bill", "Use solar generation to reduce your electricity costs."],
                                ["independence", "☀", "Energy Independence", "Generate more of your own electricity and rely less on the grid."]
                            ].map(([value, icon, title, description]) => (
                                <button key={value} type="button" className={`assessment-option ${answers.goal === value ? "active" : ""}`} aria-pressed={answers.goal === value} onClick={() => setAnswers((current) => ({ ...current, goal: value as AssessmentAnswers["goal"] }))}>
                                    <span className="assessment-option-icon" aria-hidden="true">{icon}</span>
                                    <span className="assessment-option-title">{title}</span>
                                    <span className="assessment-option-description">{description}</span>
                                </button>
                            ))}
                        </div>
                        {answers.goal === "backup" && (
                            <div className="backup-control">
                                <label htmlFor="backup-hours">How many hours of backup would you like?</label>
                                <div className="backup-value">{answers.backupHours} hours</div>
                                <input id="backup-hours" className="slider" type="range" min="2" max="24" step="1" value={answers.backupHours} onChange={(e) => setAnswers((current) => ({ ...current, backupHours: Number(e.target.value) }))} />
                                <div className="slider-labels"><span>2 hours</span><span>24 hours</span></div>
                            </div>
                        )}
                    </div>
                )}

                {step === 5 && (
                    <div className="assessment-step-content">
                        <span className="step-number">05</span>
                        <ApplianceSelector value={answers.appliances} onChange={(applianceArray) => setAnswers((current) => ({ ...current, appliances: applianceArray }))} />
                    </div>
                )}

                {step === 6 && (
                    <div className="assessment-step-content">
                        <span className="step-number">06</span>
                        <LiveRecommendation
                            solution={recommendation.solution}
                            inverter={recommendation.configuration.inverter.name}
                            battery={`${recommendation.configuration.batteryQuantity} × ${recommendation.configuration.battery.model}`}
                            panels={`${recommendation.configuration.panelQuantity} × ${recommendation.configuration.panel.model}`}
                            runningLoad={load.runningLoad}
                            criticalLoad={load.criticalLoad}
                            peakLoad={load.peakLoad}
                            backupHours={recommendation.customer.backupHours ?? 8}
                            monthlySaving={recommendation.savings.monthly}
                            annualSaving={recommendation.savings.annual}
                            equipmentValue={recommendation.equipmentValue}
                            confidence={recommendation.confidence}
                            reasons={recommendation.reasons}
                            showAction={false}
                        />
                        <div className="recommendation-note">This is an initial planning estimate, not a final system quotation. Solar8 will confirm the design after reviewing your property and requirements.</div>
                    </div>
                )}

                {step === 7 && (
                    <div className="assessment-step-content">
                        <span className="step-number">07</span>
                        <h3>Where should we send your assessment?</h3>
                        <p className="assessment-question">Enter your details so a Solar8 specialist can review your results and arrange the next step.</p>
                        <div className="contact-grid">
                            <label>Full name<input type="text" value={contact.name} onChange={(e) => updateContact("name", e.target.value)} placeholder="Your name" autoComplete="name" /></label>
                            <label>Phone number<input type="tel" value={contact.phone} onChange={(e) => updateContact("phone", e.target.value)} placeholder="e.g. 081 234 5678" autoComplete="tel" /></label>
                            <label>Email address<input type="email" value={contact.email} onChange={(e) => updateContact("email", e.target.value)} placeholder="you@example.com" autoComplete="email" /></label>
                            <label className="contact-full">Property address<input type="text" value={contact.address} onChange={(e) => updateContact("address", e.target.value)} placeholder="Street, suburb, city, province" autoComplete="street-address" /></label>
                            <label className="contact-full">Anything else you'd like us to know? <span className="optional">Optional</span><textarea rows={4} value={contact.message} onChange={(e) => updateContact("message", e.target.value)} placeholder="Tell us about your current electricity setup or what you'd like to achieve." /></label>
                        </div>
                        <p className="required-note">Required: name, phone, email and property address.</p>

                        <div className="submission-actions">
                            <a className={`assessment-btn assessment-btn-primary ${!canContinue() ? "disabled" : ""}`} href={canContinue() ? mailtoHref : undefined} aria-disabled={!canContinue()}>Email My Assessment</a>
                            <a className={`assessment-btn assessment-btn-whatsapp ${!canContinue() ? "disabled" : ""}`} href={canContinue() ? whatsappHref : undefined} target="_blank" rel="noopener noreferrer" aria-disabled={!canContinue()}>Continue on WhatsApp</a>
                        </div>
                        <p className="submission-note">Your email app will open with your assessment details ready to send to Solar8. No information is sent automatically from this static website.</p>
                    </div>
                )}

                <div className="assessment-buttons">
                    {step > 1 ? <button type="button" className="assessment-btn assessment-btn-secondary" onClick={previousStep}>Previous</button> : <span />}
                    {step < TOTAL_STEPS && <button type="button" className="assessment-btn assessment-btn-primary" onClick={nextStep} disabled={!canContinue()}>{step === 6 ? "Continue to My Details" : "Next"}</button>}
                </div>
            </div>
        </section>
    );
}
