from pathlib import Path
import zipfile, os

root=Path('/mnt/data/article23work')
blog=root/'src/data/blog.ts'
s=blog.read_text()
marker='\n];\n\nexport function getBlogPost'
assert marker in s
article=r'''    {
        slug: '20kw-solar-system-cost-south-africa',
        title: 'How Much Does a 20kW Solar System Cost in South Africa?',
        description: 'How much does a 20kW solar system cost in South Africa in 2026? Learn what affects the price, battery options, panel capacity, three-phase requirements and when a 20kW system makes sense.',
        category: 'system-sizing',
        publishedAt: '2026-09-14',
        updatedAt: '2026-09-14',
        readingTime: '10 min read',
        content: `
<p>If you are looking at a <strong>20kW solar system in South Africa</strong>, you are moving into the larger end of residential and small-business solar. At this size, the price can vary dramatically because a 20kW system can be designed for daytime bill reduction, serious load-shedding backup, or much greater energy independence.</p>

<p>Current South African market examples show 20kW systems ranging from roughly the <strong>R200,000 level to well above R500,000</strong>, depending on the inverter architecture, solar-panel capacity, battery storage, equipment quality and installation requirements. These figures are useful for planning, but they are not a quotation for your property.</p>

<p>The important point is that <strong>20kW describes only part of the system</strong>. Before comparing prices, you need to understand what the 20kW refers to and what the quotation actually includes.</p>

<h2>What does a 20kW solar system mean?</h2>

<p>A 20kW solar system normally refers to an inverter or system output capacity of around 20kW. It does not automatically mean that you have exactly 20kW of solar panels or 20kWh of battery storage.</p>

<p>These are three different measurements:</p>

<ul>
<li><strong>20kW inverter:</strong> the approximate maximum AC power the inverter can supply at a given moment, subject to the equipment and installation.</li>
<li><strong>Solar-panel capacity:</strong> the total rated DC capacity of the PV array, usually expressed in kWp.</li>
<li><strong>Battery capacity:</strong> the amount of stored energy, expressed in kWh.</li>
</ul>

<p>For example, a 20kW system might have a PV array below 20kWp, around 20kWp, or substantially more, depending on the inverter's permitted PV input and the design objectives. Battery storage could also range from a relatively modest backup bank to several tens of kWh.</p>

<h2>How much does a 20kW solar system cost in South Africa?</h2>

<p>For a broad <strong>2026 planning guide</strong>, a complete 20kW system can commonly fall somewhere around <strong>R220,000 to R500,000+</strong>. Some simpler systems can appear below this range, while premium systems with substantial battery storage, larger PV arrays or more complex electrical work can exceed it.</p>

<p>Recent South African market examples illustrate why there is no single 20kW price. Published examples include installed 20kW systems around the low-to-mid R200,000 range, while systems with much larger battery banks and more extensive equipment can move into the R300,000–R500,000+ range.</p>

<p>Use these figures as a <strong>budgeting range rather than a target price</strong>. A quotation should be based on your actual electricity consumption, peak loads, roof, electrical supply and backup requirements.</p>

<h2>Why can two 20kW solar quotes be so different?</h2>

<p>The phrase “20kW solar system” does not tell you enough to compare two quotations. The biggest differences usually come from the following areas.</p>

<h3>Battery storage</h3>

<p>Battery capacity can change the price substantially. A property that mainly wants to reduce daytime grid consumption may need far less storage than a property that wants several hours of backup after sunset.</p>

<p>A 20kW inverter with a relatively small battery is a very different proposition from a 20kW hybrid system designed to carry substantial overnight loads.</p>

<p>For more information, see our guides on <a href="/blog/how-much-battery-storage-do-i-need-south-africa/">how much battery storage a home needs</a> and <a href="/blog/how-long-will-solar-battery-last-load-shedding-south-africa/">how long a solar battery can last during load shedding</a>.</p>

<h3>Solar-panel capacity</h3>

<p>A 20kW inverter does not necessarily have a 20kWp solar array. Designers may use a larger DC array to improve solar production during less-than-ideal conditions, provided the inverter's voltage, current and PV input limits are respected.</p>

<p>As a simple example, 30 panels rated at 600W would provide approximately <strong>18kWp</strong> of panel capacity. Thirty-six 600W panels would provide approximately <strong>21.6kWp</strong>. These are examples, not recommendations for a particular property.</p>

<h3>Inverter quality and architecture</h3>

<p>A 20kW three-phase hybrid inverter, a grid-tied inverter and a multi-inverter arrangement can have very different prices and capabilities.</p>

<p>If backup is important, the inverter must be capable of operating appropriately during a grid outage and the electrical installation must be designed around the backup configuration.</p>

<p>Our guide to <a href="/blog/what-size-solar-inverter-do-i-need-south-africa/">choosing the right solar inverter size</a> explains why inverter capacity should be based on actual loads rather than the electricity bill alone.</p>

<h3>Installation and electrical work</h3>

<p>A larger system can require more substantial cabling, protection equipment, mounting structures, distribution-board work and electrical configuration. The distance between the panels, inverter, batteries and DB can also affect installation requirements.</p>

<p>Roof access, roof condition, multiple roof faces, long cable runs and unusual electrical arrangements can all increase the final cost.</p>

<h2>Will a 20kW system usually be three-phase?</h2>

<p>At this size, <strong>three-phase supply becomes an important consideration</strong>. Many larger residential properties, estates, farms and small commercial sites have three-phase electrical supplies, and a three-phase inverter may be appropriate.</p>

<p>However, you should not assume that every property needs exactly the same configuration. The existing electrical supply, distribution board, loads and utility requirements must be checked before selecting the equipment.</p>

<p>This is particularly important when the property has large motors, pumps, multiple air conditioners, electric cooking equipment or other loads that may operate across phases.</p>

<h2>How many solar panels are needed for a 20kW system?</h2>

<p>There is no single panel count for a 20kW system because panel wattage and the required PV array size can vary.</p>

<p>For illustration:</p>

<ul>
<li>33 × 600W panels = approximately 19.8kWp</li>
<li>36 × 600W panels = approximately 21.6kWp</li>
<li>32 × 625W panels = approximately 20.0kWp</li>
<li>30 × 550W panels = approximately 16.5kWp</li>
</ul>

<p>The correct number depends on the inverter's MPPT voltage/current range, maximum PV input, roof layout, shading, panel orientation and the amount of solar generation required.</p>

<p>Our article <a href="/blog/how-many-solar-panels-for-10kw-system-south-africa/">How Many Solar Panels Do I Need for a 10kW System?</a> explains the same principle at a smaller system size.</p>

<h2>How much battery storage does a 20kW system need?</h2>

<p>The answer depends on what you expect the battery to do.</p>

<p>If the main objective is <strong>daytime solar generation and electricity-bill reduction</strong>, you may choose a smaller battery and use the solar energy directly during the day.</p>

<p>If the objective is <strong>load-shedding backup</strong>, battery capacity becomes much more important. A large home with several high-power appliances may consume several kWh in a relatively short period, particularly if geysers, pumps, cooking equipment or air conditioners are allowed to run during an outage.</p>

<p>For a larger property, battery storage might therefore be measured in tens of kWh rather than a small 5kWh backup battery.</p>

<p>However, buying a very large battery simply because the inverter is 20kW is not necessarily sensible. Battery size should be matched to the loads you actually want to back up, the expected outage duration and the amount of solar energy available to recharge it.</p>

<h2>What can a 20kW solar system run?</h2>

<p>A correctly designed 20kW system can support a substantial collection of household or small-business loads, but the exact combination depends on the inverter, phase configuration, battery and electrical installation.</p>

<p>Large properties may have several of the following:</p>

<ul>
<li>Multiple geysers</li>
<li>Pool pumps</li>
<li>Air conditioners</li>
<li>Borehole pumps</li>
<li>Electric ovens and hobs</li>
<li>Refrigeration and freezers</li>
<li>Home-office equipment</li>
<li>Workshop equipment</li>
<li>Gate motors and security systems</li>
<li>Electric vehicle charging</li>
</ul>

<p>The important question is not simply whether a 20kW inverter is “big enough”. The installer needs to understand which appliances can operate simultaneously and which loads need to remain available during an outage.</p>

<p>Our guide <a href="/blog/can-solar-run-geyser-pool-pump-aircon-south-africa/">Can Solar Panels Run a Geyser, Pool Pump and Air Conditioner?</a> covers this issue in more detail.</p>

<h2>Is 20kW too large for a home?</h2>

<p>For an ordinary low-consumption household, a 20kW system could be unnecessarily large. But for a large home with substantial electricity consumption, several high-power appliances, multiple buildings or a strong desire for backup capacity, it can make sense.</p>

<p>The number of bedrooms alone does not justify a 20kW system. A smaller house with electric heating, multiple air conditioners, a pool, borehole and electric cooking could use more electricity than a larger home with efficient appliances.</p>

<p>Look at your actual <strong>monthly kWh consumption and peak simultaneous load</strong> before choosing the system size.</p>

<p>If you are deciding between system sizes, compare our guides to <a href="/blog/10kw-solar-system-cost-south-africa/">10kW systems</a>, <a href="/blog/15kw-solar-system-cost-south-africa/">15kW systems</a> and <a href="/blog/how-much-solar-do-i-need-large-house-south-africa/">solar sizing for a large home</a>.</p>

<h2>20kW solar for a home, estate or small business</h2>

<p>A 20kW system can be appropriate for more than large homes. It can also suit certain guesthouses, offices, workshops, farms, estates and other sites with significant daytime electricity demand.</p>

<p>Commercial applications need additional attention to operating hours, three-phase loads, demand patterns, export requirements and the site's electricity tariff. The cheapest system is not necessarily the system that produces the best financial result.</p>

<p>For a business, the best design may focus heavily on daytime solar production. For a home, battery storage may have a much larger role because evening and outage loads can be significant.</p>

<h2>What should be included in a 20kW solar quotation?</h2>

<p>When comparing quotations, make sure you understand the complete scope rather than comparing only the headline inverter size.</p>

<ul>
<li>Inverter make, model and configuration</li>
<li>Total solar-panel capacity</li>
<li>Panel make and rated wattage</li>
<li>Battery brand and total storage capacity</li>
<li>Usable battery capacity and warranty</li>
<li>Mounting structure</li>
<li>DC and AC protection</li>
<li>Cabling and installation</li>
<li>Distribution-board modifications, if required</li>
<li>Monitoring and communications</li>
<li>Certificate of Compliance</li>
<li>Grid or SSEG requirements where applicable</li>
<li>Warranty and after-sales support</li>
</ul>

<p>A quotation with a lower headline price may contain less battery storage, a smaller PV array or a different level of installation work. Compare the complete system, not just the number printed beside “20kW”.</p>

<h2>20kW vs 15kW: which is better?</h2>

<p>If your property sits between these sizes, the answer should come from your actual loads and future plans.</p>

<p>A 15kW system may be sufficient if your peak demand and energy consumption are comfortably within that range. Moving to 20kW can make sense when simultaneous loads are higher, future expansion is expected or the property has multiple large electrical loads.</p>

<p>Do not buy 20kW simply because it sounds safer. Oversizing an inverter without a corresponding need can add unnecessary cost.</p>

<h2>What does a 20kW system cost to install in Gauteng?</h2>

<p>Gauteng installations can vary considerably. Pretoria, Johannesburg and surrounding areas have many different property types, from standard suburban homes to estates, smallholdings and commercial premises.</p>

<p>The final installation cost can be affected by roof access, roof structure, cable distances, DB-board configuration, three-phase requirements, battery location, municipal or utility requirements and whether additional electrical work is needed.</p>

<p>That is why an online “20kW price” should be treated as a starting point rather than the price you should expect to pay at your property.</p>

<h2>The bottom line</h2>

<p>A <strong>20kW solar system in South Africa can broadly cost around R220,000 to R500,000+</strong> in the current market, with substantial variation depending on the PV array, inverter configuration, battery storage and installation scope.</p>

<p>A simpler daytime-focused system can sit toward the lower end, while a premium three-phase hybrid system with substantial battery storage and more complex installation can move much higher.</p>

<p>The right system is not necessarily the biggest or most expensive one. It is the system that matches your electricity consumption, peak loads, roof, electrical supply and backup requirements.</p>

<h2>Find out whether a 20kW system is right for your property</h2>

<p>If you are considering a 20kW solar system, Solar8 can assess your electricity usage, appliances, roof, electrical supply and backup requirements before recommending the appropriate system configuration.</p>

<p><strong><a href="/assessment/">Get My FREE Solar8 Assessment</a></strong> and find out what size solar system makes sense for your property.</p>`
    },
'''
s=s.replace(marker, '\n'+article+'];\n\nexport function getBlogPost')
blog.write_text(s)

sitemap=root/'public/sitemap.xml'
ss=sitemap.read_text()
needle='  <url><loc>https://solar8.co.za/blog/15kw-solar-system-cost-south-africa/</loc></url>\n'
assert needle in ss
ss=ss.replace(needle, needle+'  <url><loc>https://solar8.co.za/blog/20kw-solar-system-cost-south-africa/</loc></url>\n')
sitemap.write_text(ss)

readme=root/'BLOG-ARTICLE23-README.md'
readme.write_text('''# Solar8 Blog Article #23\n\n## Title\nHow Much Does a 20kW Solar System Cost in South Africa?\n\n## URL\n/blog/20kw-solar-system-cost-south-africa/\n\n## Category\nsystem-sizing\n\n## SEO focus\nPrimary keyword: 20kW solar system cost South Africa\nSecondary: 20kW solar system price South Africa, 20kW solar system cost, 20kW solar system price, 20kW solar system 2026, 20kW three-phase solar system, 20kW solar for large home, 20kW solar Pretoria, 20kW solar Johannesburg, 20kW solar Gauteng\n\n## Positioning\nBroad current-market planning guidance. Pricing is intentionally broad and does not disclose Solar8 component pricing or markup.\n\n## Research basis\nCurrent September 2026 South African market examples were reviewed from installer and solar-market sources, including published 20kW residential/three-phase packages and 2026 residential solar cost guides.\n\n## QA expectation\nPrevious cumulative build: 50 pages. This article adds one route, so expected build: 51 pages.\n''')

# create cumulative zip
out=Path('/mnt/data/Solar8-Blog-Article23-v1.2-CUMULATIVE.zip')
if out.exists(): out.unlink()
with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED) as z:
    for path in root.rglob('*'):
        if path.is_file():
            z.write(path, path.relative_to(root))
print(out, out.stat().st_size)
