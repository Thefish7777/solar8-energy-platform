from pathlib import Path
p=Path('/mnt/data/solar8_39/src/data/blog.ts')
s=p.read_text(encoding='utf-8')
assert 'how-much-battery-storage-for-5kw-solar-system-south-africa' not in s
article=r'''
    {
        slug: "how-much-battery-storage-for-5kw-solar-system-south-africa",
        title: "How Much Battery Storage Do I Need for a 5kW Solar System in South Africa?",
        description: "How much battery storage does a 5kW solar system need in South Africa? Compare 5kWh, 10kWh and 15kWh options and learn how to size battery storage for load shedding and evening use.",
        category: "battery-storage",
        publishedAt: "2026-09-17",
        updatedAt: "2026-09-17",
        readingTime: "8 min read",
        content: `
<h2>How much battery storage does a 5kW solar system need?</h2>
<p>For many South African homes, <strong>5–15kWh of battery storage</strong> is a useful range to investigate with a 5kW solar system. A <strong>5kWh battery</strong> can provide basic backup for essential loads, <strong>10kWh</strong> is a practical choice for many homes wanting longer backup and evening energy shifting, while <strong>15kWh or more</strong> can make sense for higher consumption or longer backup requirements.</p>
<p>The right battery size is not determined by the 5kW inverter rating alone. Your electricity consumption, the appliances you want to keep running, the number of backup hours required and the amount of solar energy available to recharge the battery all matter.</p>

<h2>What does 5kW mean compared with battery kWh?</h2>
<p>A 5kW solar system and a 10kWh battery describe two different things.</p>
<ul>
<li><strong>kW:</strong> the rate at which electrical power can be supplied at a particular moment.</li>
<li><strong>kWh:</strong> the amount of energy the battery can store.</li>
</ul>
<p>A 5kW hybrid inverter can therefore be paired with a 5kWh, 10kWh or 15kWh battery bank, provided the battery's voltage, current, communications and discharge specifications are compatible with the inverter.</p>
<p>This is why you should not assume that a 5kW solar system needs exactly 5kWh of battery storage.</p>

<h2>Is a 5kWh battery enough for a 5kW solar system?</h2>
<p><strong>5kWh can be enough for basic backup</strong> when you are concentrating on essential circuits such as lights, refrigeration, Wi-Fi, security equipment, televisions and selected electronics.</p>
<p>A battery's rated capacity is not necessarily the same as the energy you should routinely use. Depth of discharge, reserve settings, inverter losses, temperature and the battery manufacturer's operating limits affect the usable energy available to your home.</p>
<p>As a simple illustration, if your selected backup load averages 500W, 4kWh of usable energy would represent roughly eight hours of simplified runtime. Actual runtime will vary because household loads switch on and off rather than remaining at a constant 500W.</p>

<h2>Is 10kWh enough for a 5kW solar system?</h2>
<p><strong>10kWh is a strong starting point for many homeowners</strong> who want more than basic essential-load backup. It gives you more stored energy for evening consumption and provides greater flexibility during longer outages.</p>
<p>Current South African 2026 battery-sizing guides commonly place a 10kWh battery around the recommended range for a 5kW residential system, while the final choice still depends on the property's actual load profile. citeturn0search6turn0search2</p>
<p>For example, a home might use solar energy during the day, charge the battery from surplus solar, and then use the stored energy for lighting, refrigeration, entertainment, networking and other selected loads after sunset.</p>

<h2>When does a 5kW system need 15kWh of battery storage?</h2>
<p><strong>15kWh or more</strong> becomes more relevant when the home has higher evening consumption or the owner wants a longer period of backup.</p>
<p>This can apply where several refrigerators, home-office equipment, pool equipment, air conditioning or other significant loads are included in the backup strategy. It can also make sense when the objective is to shift a substantial amount of daytime solar energy into the evening rather than using the battery only for load shedding.</p>
<p>However, adding battery capacity does not automatically mean that the system will recharge that battery fully every day. The PV array, daytime household consumption, weather and season all affect how much energy is available for charging.</p>

<h2>5kWh vs 10kWh vs 15kWh battery</h2>
<table>
<thead><tr><th>Battery size</th><th>Typical planning use</th><th>What to consider</th></tr></thead>
<tbody>
<tr><td>5kWh</td><td>Basic essential-load backup</td><td>Lower cost and suitable for a limited backup circuit; runtime depends heavily on the load</td></tr>
<tr><td>10kWh</td><td>Longer backup + evening energy shifting</td><td>A practical starting point for many 5kW residential systems</td></tr>
<tr><td>15kWh</td><td>Higher evening use or longer backup</td><td>Needs enough PV generation and battery discharge capability to justify the extra capacity</td></tr>
</tbody>
</table>
<p>These are planning ranges, not fixed rules. A small home with very low essential loads may need less, while a high-consumption home may benefit from more storage.</p>

<h2>How to calculate the battery size you need</h2>
<p>A useful first calculation is:</p>
<p><strong>Battery energy required = average backup load × required backup hours</strong></p>
<p>For example, suppose the circuits you want backed up average 1kW and you want six hours of battery-supported operation:</p>
<p><strong>1kW × 6 hours = 6kWh</strong></p>
<p>You then need to allow for usable capacity, reserve settings and system losses. This may lead to a battery with a nominal rating above 6kWh being selected.</p>
<p>South African sizing guides similarly recommend starting with the appliances you actually need during an outage, estimating their load and multiplying that load by the required backup time. citeturn0search1turn0search0</p>

<h2>What can a 5kWh battery run during load shedding?</h2>
<p>The answer depends on the combined load and how long the appliances operate. A typical essential-load backup circuit could include:</p>
<ul>
<li>LED lighting</li>
<li>Refrigerator and freezer</li>
<li>Wi-Fi router and networking equipment</li>
<li>Television and decoder</li>
<li>Security alarm and cameras</li>
<li>Electric gate motor</li>
<li>Selected plugs and home-office equipment</li>
</ul>
<p>High-power appliances can reduce runtime quickly. A kettle, microwave, electric stove, geyser, pool pump or air conditioner may draw substantially more power than basic electronic loads.</p>

<h2>What can a 10kWh battery run during load shedding?</h2>
<p>A 10kWh battery gives you considerably more flexibility, but it still does not mean every appliance can run continuously.</p>
<p>If the selected backup load averages 1kW, a simplified 10kWh calculation suggests around ten hours before accounting for usable-capacity limits and conversion losses. At 2kW average load, the same nominal capacity would theoretically cover around five hours. Actual results vary as appliances cycle and as the battery reaches its operating limits.</p>
<p>This is why <strong>average load matters just as much as battery size</strong>.</p>

<h2>What about a 15kWh battery?</h2>
<p>A 15kWh battery can provide a useful reserve for a larger household, particularly where evening consumption is substantial or several circuits must remain powered during outages.</p>
<p>It may also be useful where the homeowner wants to store more of the day's solar production and use it after sunset. However, the battery must be sized alongside the PV array and inverter so that there is enough solar energy and charging capacity to refill the storage.</p>

<h2>Don't size the battery around your inverter alone</h2>
<p>A 5kW inverter tells you how much power the inverter can supply. It does not tell you how many hours your battery should run.</p>
<p>For example, a home may have a 5kW inverter but only require 700W of essential backup load during an outage. Another home may want to operate a 2.5kW air conditioner, pool pump and other appliances from the battery. These two properties could have very different battery requirements even though both have 5kW inverters.</p>
<p>The battery should therefore be designed around the <strong>actual load profile and backup objective</strong>.</p>

<h2>Battery discharge power is also important</h2>
<p>Battery capacity in kWh is only part of the specification. You also need to consider how much power the battery bank can safely deliver at one time.</p>
<p>A battery with sufficient stored energy may still be unsuitable for a high-demand load if its maximum continuous discharge current or power is too low. The battery-management system, inverter and battery configuration must all support the intended load.</p>
<p>This becomes particularly important when multiple appliances start at the same time or when motors such as pumps require higher starting power.</p>

<h2>Should the battery power the geyser and pool pump?</h2>
<p>Not necessarily. One of the easiest ways to reduce battery requirements is to keep high-energy appliances outside the battery backup strategy where practical.</p>
<p>A geyser, for example, can often be scheduled to heat during periods of strong solar production rather than using stored battery energy at night. A pool pump can similarly be scheduled during daylight hours when solar generation is available.</p>
<p>This can allow a smaller battery to provide longer backup for the loads that matter most to the household.</p>

<h2>Can a 5kW solar array recharge a 10kWh or 15kWh battery?</h2>
<p>Yes, but the amount of energy available for charging changes throughout the day and across the seasons.</p>
<p>A 5kW inverter does not produce 5kW continuously. Solar generation depends on the panel array size, sunlight, orientation, shading, temperature and weather. Household consumption during the day also uses some of the solar energy before the remainder reaches the battery.</p>
<p>A well-designed system should therefore consider <strong>daily PV energy production, daytime consumption and the battery charging window</strong> together.</p>

<h2>What happens in winter?</h2>
<p>Winter matters when deciding how much battery storage to install. Shorter daylight hours, weather and seasonal changes in solar production can reduce the energy available to recharge the battery.</p>
<p>This does not automatically mean that you should buy a larger battery. A larger battery can actually take longer to recharge if the PV array does not produce enough surplus energy. The better approach is to size the complete system around realistic production and consumption patterns.</p>

<h2>Battery chemistry and usable capacity</h2>
<p>Modern residential solar installations in South Africa commonly use lithium batteries, particularly LiFePO4 chemistry. These batteries generally allow a substantially greater usable portion of their rated capacity than traditional lead-acid systems. citeturn0search5turn0search0</p>
<p>When comparing batteries, ask for both the <strong>rated capacity</strong> and the <strong>usable capacity</strong>. Also check the manufacturer's recommended depth of discharge, warranty conditions, cycle rating, operating temperature range and maximum charge/discharge current.</p>

<h2>Battery and inverter compatibility</h2>
<p>Not every battery can simply be connected to every hybrid inverter. Voltage range, current limits, communication protocols, battery-management requirements and approved compatibility lists all matter.</p>
<p>Solar8 can work with suitable battery solutions from established manufacturers such as <strong>Hubble, Pylontech, Freedom Won and other compatible systems</strong>, depending on the inverter and project requirements.</p>
<p>Before buying, confirm that the proposed battery is approved for the inverter and that the complete battery bank meets the manufacturer's minimum and maximum configuration requirements.</p>

<h2>What does a 5kW solar system with battery cost?</h2>
<p>The total installed price depends heavily on the battery capacity, inverter brand, panel array, mounting, protection equipment, cabling, electrical work and installation requirements.</p>
<p>Current South African 2026 market guides show broad installed pricing around <strong>R80,000–R125,000</strong> for typical 5kW hybrid systems, with battery size and equipment selection having a major effect on the final figure. These published figures are market references, not Solar8 pricing. citeturn0search4turn0search10</p>
<p><strong>Solar8 does not publish a single fixed price for every 5kW system with battery storage</strong> because the correct system depends on the property, electrical supply, energy usage and backup requirements.</p>

<h2>Battery sizing for Pretoria and Gauteng</h2>
<p>For homes in Pretoria, Johannesburg and surrounding Gauteng areas, the battery decision should take account of the property's actual electricity consumption, daytime usage, evening load, roof conditions and the circuits that need backup.</p>
<p>For many residential properties, <strong>10kWh is a sensible battery size to investigate first</strong>. A 5kWh battery may be sufficient where only essential loads are backed up, while 15kWh or more can be justified by higher consumption or longer backup requirements.</p>
<p>The final design should be based on your actual usage rather than simply choosing the same kWh number as the inverter's kW rating.</p>

<h2>Common 5kW battery-sizing mistakes</h2>
<ul>
<li><strong>Matching kWh to kW.</strong> A 5kW inverter does not require a 5kWh battery.</li>
<li><strong>Ignoring usable capacity.</strong> Rated kWh and usable kWh are not always identical.</li>
<li><strong>Ignoring average load.</strong> A large battery can be depleted quickly by high-power appliances.</li>
<li><strong>Backing up everything.</strong> Selecting essential circuits can significantly reduce storage requirements.</li>
<li><strong>Ignoring battery discharge power.</strong> Capacity alone does not determine whether high loads can run.</li>
<li><strong>Ignoring PV recharge.</strong> A large battery needs enough surplus solar energy to recharge.</li>
<li><strong>Ignoring winter production.</strong> Design assumptions should allow for realistic seasonal conditions.</li>
<li><strong>Ignoring compatibility.</strong> Battery and inverter electrical and communications specifications must match.</li>
</ul>

<h2>Questions to ask before buying a 5kW solar system with a battery</h2>
<ul>
<li>What is the property's average monthly electricity consumption?</li>
<li>What is the average evening and overnight load?</li>
<li>Which circuits must remain powered during load shedding?</li>
<li>How many hours of backup are required?</li>
<li>What is the battery's rated capacity?</li>
<li>What is the battery's usable capacity?</li>
<li>What is its maximum continuous discharge power?</li>
<li>Can the proposed battery configuration support the inverter?</li>
<li>Can the solar array recharge the battery reliably?</li>
<li>How will the system perform during lower winter production?</li>
<li>Does the quotation include protection, cabling, installation, testing and compliance?</li>
<li>Can the battery bank be expanded later if your energy needs increase?</li>
</ul>

<h2>The practical answer for a 5kW solar system</h2>
<p>If you want a simple starting point, <strong>5–15kWh is a useful battery range to investigate</strong> for a 5kW solar system in South Africa.</p>
<p><strong>5kWh</strong> can suit basic essential-load backup. <strong>10kWh</strong> is a practical choice for many homeowners wanting longer backup and evening energy shifting. <strong>15kWh or more</strong> becomes more relevant when the property has higher evening consumption or a longer backup objective.</p>
<p>The correct battery ultimately depends on your electricity usage, essential loads, required backup duration, inverter capability and the amount of solar energy available to recharge the storage.</p>

<h2>Get the right 5kW solar system for your property</h2>
<p>Solar8 supplies complete solar systems for South African homes and businesses. We can help you determine the right combination of inverter capacity, solar panels and battery storage based on your electricity usage, electrical supply, property and backup requirements.</p>
<p><a href="/assessment/">Get My FREE Assessment</a> and let Solar8 help you determine the right 5kW solar system and battery size for your property.</p>
`
    },
'''
needle='\n];\n\nexport function getBlogPost'
assert needle in s
s=s.replace(needle, '\n'+article+'];\n\nexport function getBlogPost',1)
p.write_text(s,encoding='utf-8')

sm=Path('/mnt/data/solar8_39/public/sitemap.xml')
t=sm.read_text(encoding='utf-8')
url='<url><loc>https://solar8.co.za/blog/how-much-battery-storage-for-5kw-solar-system-south-africa/</loc><lastmod>2026-09-17</lastmod></url>'
assert 'how-much-battery-storage-for-5kw-solar-system-south-africa' not in t
assert t.rstrip().endswith('</urlset>')
t=t.rstrip().replace('</urlset>', '  '+url+'\n</urlset>')
sm.write_text(t,encoding='utf-8')
print('added article 39')
