from pathlib import Path
p=Path('/mnt/data/solar8_40/src/data/blog.ts')
s=p.read_text(encoding='utf-8')
needle='\n];\n\nexport function getBlogPost'
if needle not in s: raise SystemExit('needle not found')
article=r'''
    {
        slug: "how-much-battery-storage-for-8kw-solar-system-south-africa",
        title: "How Much Battery Storage Do I Need for an 8kW Solar System in South Africa?",
        description: "How much battery storage does an 8kW solar system need in South Africa? Compare 10kWh, 15kWh and 20kWh options and learn how to size battery storage for load shedding and evening use.",
        category: "battery-storage",
        publishedAt: "2026-09-17",
        updatedAt: "2026-09-17",
        readingTime: "9 min read",
        content: `<p>If you are considering an <strong>8kW solar system in South Africa</strong>, one of the next questions is usually how much battery storage you should add. The answer is not simply “8kWh”. An 8kW inverter describes power, while a battery's kWh rating describes stored energy.</p>

<p>For many residential properties, <strong>10–20kWh of battery storage is a useful range to investigate</strong>. Around 10kWh can suit essential-load backup and moderate evening use, 15kWh can provide more flexibility, while 20kWh or more becomes relevant when the home has higher evening consumption or a longer backup objective.</p>

<p>Current South African battery-sizing guidance also emphasises that the correct capacity depends on the appliances you want to run, the duration of backup required, usable rather than headline capacity, and how much solar energy is available to recharge the battery. citeturn0search0turn0search1</p>

<h2>What does an 8kW solar system actually mean?</h2>
<p>An 8kW solar system normally refers to the power capacity of the inverter, although people sometimes use the term to describe the overall system. The 8kW figure does not tell you how much energy the home consumes each day or how much battery storage is required.</p>

<p>Think of the two measurements this way:</p>
<ul>
<li><strong>kW</strong> measures how much power can be delivered at a particular moment.</li>
<li><strong>kWh</strong> measures how much energy is stored or consumed over time.</li>
</ul>

<p>An 8kW hybrid inverter might therefore be paired with 10kWh, 15kWh or 20kWh of battery storage. The appropriate combination depends on the property's loads, solar generation and backup requirements.</p>

<h2>How much battery storage is typical for an 8kW solar system?</h2>
<p>There is no single battery size that is correct for every 8kW installation. As a practical starting point for South African homes, these ranges are useful to investigate:</p>

<table>
<thead><tr><th>Battery size</th><th>Typical role</th><th>What it may suit</th></tr></thead>
<tbody>
<tr><td><strong>5kWh</strong></td><td>Basic backup</td><td>Lights, Wi-Fi, security, refrigeration and selected electronics</td></tr>
<tr><td><strong>10kWh</strong></td><td>Moderate backup</td><td>Essential loads plus more evening usage</td></tr>
<tr><td><strong>15kWh</strong></td><td>Extended backup</td><td>Larger homes and greater evening energy shifting</td></tr>
<tr><td><strong>20kWh+</strong></td><td>High storage</td><td>Higher consumption, longer backup or broader whole-home coverage</td></tr>
</tbody>
</table>

<p>Published 2026 South African guides commonly place 10kWh around the practical load-shedding range, while 15–20kWh becomes more relevant as household consumption and backup expectations increase. One current 8kW market example pairs an 8kW system with a 15kWh battery, illustrating that battery capacity is a separate design decision from inverter size. citeturn0search0turn0search10</p>

<h2>Is a 10kWh battery enough for an 8kW solar system?</h2>
<p>It can be. For a home using an 8kW inverter, a 10kWh battery can be a sensible starting point when the goal is to keep essential circuits running during load shedding and cover a portion of the evening load.</p>

<p>However, a 10kWh battery does not mean you can run an 8kW load for more than an hour. The actual runtime depends on the average load and the battery's usable capacity.</p>

<p>For example, if a battery provides about 8.5kWh of usable energy:</p>
<ul>
<li>500W average load could theoretically use about 17 hours of energy.</li>
<li>1kW average load could use about 8.5 hours.</li>
<li>2kW average load could use about 4.25 hours.</li>
<li>3kW average load could use about 2.8 hours.</li>
</ul>

<p>These are simplified energy calculations. Real-world runtime is affected by inverter losses, battery operating limits, temperature, battery condition and changes in household demand.</p>

<h2>When does a 15kWh battery make sense?</h2>
<p>A 15kWh battery can be attractive when a homeowner wants more than basic backup. It provides a larger energy reserve for evening consumption and gives the system more flexibility when several essential loads operate for longer periods.</p>

<p>For example, a home might want to keep refrigeration, lighting, Wi-Fi, televisions, security equipment, computers and selected plug circuits operating during an outage, while also using stored solar energy after sunset.</p>

<p>A 15kWh battery is also worth investigating when the homeowner wants to shift more daytime solar energy into the evening rather than using grid electricity after the sun goes down.</p>

<h2>When should I consider 20kWh or more?</h2>
<p>Moving towards 20kWh or more can make sense where the home has a higher evening energy requirement or where the backup objective is more ambitious.</p>

<p>This could include larger homes with multiple refrigerators, home offices, entertainment equipment, security systems, pumps and other loads that need to remain operational. It may also be relevant where the homeowner wants broader whole-home backup rather than an essential-load strategy.</p>

<p>However, buying a larger battery is not automatically better. If the property does not regularly consume or need the additional stored energy, the extra capacity may add cost without delivering a corresponding benefit.</p>

<h2>Rated battery capacity vs usable battery capacity</h2>
<p>One of the most important battery-sizing details is the difference between <strong>rated capacity</strong> and <strong>usable capacity</strong>.</p>

<p>A battery advertised as 10kWh does not necessarily provide 10kWh of energy that you should plan to use every cycle. The usable amount depends on the manufacturer's operating limits, recommended depth of discharge and the system's efficiency.</p>

<p>Current South African sizing guides commonly recommend designing around usable energy and allowing a sensible buffer rather than assuming the full nameplate capacity is available. citeturn0search0turn0search6</p>

<p>When comparing quotations, ask the installer to show:</p>
<ul>
<li>Rated battery capacity in kWh</li>
<li>Usable battery capacity in kWh</li>
<li>Recommended depth of discharge</li>
<li>Maximum continuous charge and discharge power</li>
<li>Battery warranty and cycle information</li>
</ul>

<h2>How do I calculate the battery size I need?</h2>
<p>A simple starting calculation is:</p>

<p><strong>Required usable battery energy = average backup load × required backup hours</strong></p>

<p>For example, suppose the circuits you want to keep running average 1.5kW and you want four hours of backup:</p>

<p><strong>1.5kW × 4 hours = 6kWh usable energy</strong></p>

<p>You then need to allow for battery operating limits and system losses. This is why a battery with a higher rated capacity than 6kWh would normally be selected.</p>

<p>For a more demanding example, a 2kW average backup load for six hours requires approximately:</p>

<p><strong>2kW × 6 hours = 12kWh usable energy</strong></p>

<p>That points towards a larger battery bank rather than a small 5kWh unit.</p>

<h2>What appliances should be included?</h2>
<p>Start with the loads you genuinely need during an outage. Typical essential loads can include:</p>
<ul>
<li>LED lighting</li>
<li>Refrigerators and freezers</li>
<li>Wi-Fi and networking equipment</li>
<li>Televisions and entertainment electronics</li>
<li>Security systems and electric gates</li>
<li>Computers and home-office equipment</li>
<li>Selected plug circuits</li>
</ul>

<p>High-power appliances need more careful consideration:</p>
<ul>
<li><strong>Geyser:</strong> commonly several kilowatts while heating.</li>
<li><strong>Pool pump:</strong> a substantial motor load that can add significant daily energy consumption.</li>
<li><strong>Air conditioner:</strong> can draw substantial power and run for extended periods.</li>
<li><strong>Electric stove or oven:</strong> high instantaneous demand when cooking.</li>
<li><strong>Microwave and kettle:</strong> high power for short periods.</li>
</ul>

<p>Current South African guidance recommends identifying the actual backup appliances rather than assuming that the entire household should remain powered exactly as it does when the grid is available. citeturn0search2turn0search5</p>

<h2>Should an 8kW system run the geyser from the battery?</h2>
<p>Not necessarily. In many homes, it is more efficient to use solar generation directly for high-energy daytime loads such as the geyser where the installation allows it.</p>

<p>For example, a geyser can often be scheduled to heat when solar production is strong. That means the battery does not have to store enough energy to heat the geyser later at night.</p>

<p>The same principle can apply to pool pumps, washing machines and other flexible loads. Shifting these appliances into the daytime can reduce the amount of battery storage needed while increasing direct solar self-consumption.</p>

<h2>How long will an 8kW system battery last during load shedding?</h2>
<p>The inverter's 8kW rating does not determine battery runtime. Runtime depends primarily on the battery's usable energy and the average power being drawn.</p>

<table>
<thead><tr><th>Usable battery energy</th><th>500W average load</th><th>1kW average load</th><th>2kW average load</th></tr></thead>
<tbody>
<tr><td>8kWh</td><td>16 hours</td><td>8 hours</td><td>4 hours</td></tr>
<tr><td>12kWh</td><td>24 hours</td><td>12 hours</td><td>6 hours</td></tr>
<tr><td>16kWh</td><td>32 hours</td><td>16 hours</td><td>8 hours</td></tr>
</tbody>
</table>

<p>These figures are simplified theoretical runtime calculations and do not account for conversion losses or changes in load. They are useful for understanding why a household's actual load matters so much.</p>

<h2>Battery power is different from battery capacity</h2>
<p>There is another important distinction: a battery must have enough <strong>discharge power</strong> as well as enough stored energy.</p>

<p>A battery bank might have plenty of kWh but still be unable to support a high instantaneous load if its maximum discharge current or power is too low.</p>

<p>For an 8kW hybrid inverter, the battery bank should therefore be checked for its maximum continuous discharge capability and the manufacturer's requirements for operating with that inverter.</p>

<h2>Can an 8kW solar array recharge a 20kWh battery?</h2>
<p>Yes, but the answer depends on the actual PV array, not simply the inverter label.</p>

<p>An 8kW inverter can be paired with a solar array whose total panel capacity is different from 8kWp, subject to the inverter's permitted PV input, MPPT voltage/current limits and the design of the installation.</p>

<p>If a large battery is installed but the solar array and household daytime demand leave little surplus energy, the battery may take longer to recharge. A good design therefore balances:</p>
<ul>
<li>Solar array capacity</li>
<li>Daytime household consumption</li>
<li>Battery capacity</li>
<li>Battery charging power</li>
<li>Expected solar production</li>
<li>Evening and overnight consumption</li>
</ul>

<h2>What about winter in South Africa?</h2>
<p>Winter conditions matter because the amount of solar energy available to recharge the battery changes with daylight hours, weather, temperature and the property's orientation and shading.</p>

<p>A larger battery does not solve a lack of solar generation. If the PV array cannot replace the energy used by the home and the battery, a larger storage bank may simply take longer to recover.</p>

<p>The complete system should therefore be considered as one design: <strong>panels + inverter + battery + household loads</strong>.</p>

<h2>Battery and inverter compatibility</h2>
<p>Not every lithium battery can simply be connected to every hybrid inverter. Voltage range, current limits, battery-management communications, firmware requirements and approved compatibility lists all matter.</p>

<p>Solar8 can work with suitable battery solutions from established manufacturers such as <strong>Hubble, Pylontech, Freedom Won and other compatible systems</strong>, depending on the inverter and project requirements.</p>

<p>Before purchasing, confirm that the proposed battery is approved for the selected inverter and that the battery bank meets the manufacturer's requirements for module count, voltage and communication.</p>

<h2>What does an 8kW solar system with battery storage cost?</h2>
<p>The battery can represent a significant part of the total system investment. The final price depends on the battery size, inverter brand, solar panel array, mounting, protection, cabling, electrical work and installation requirements.</p>

<p>As a broad 2026 market reference, published South African examples show an 8kW system with around 15kWh of battery storage in the roughly <strong>R95,000–R110,000</strong> range for one packaged offering. Other equipment combinations and installation specifications can move substantially above or below that level. These figures are market references, not Solar8 pricing. citeturn0search10</p>

<p><strong>Solar8 does not publish one fixed price for every 8kW system with battery storage</strong> because the correct specification depends on the property, electricity usage, electrical supply, backup requirements and equipment selected.</p>

<h2>Battery sizing for Pretoria and Gauteng</h2>
<p>For homes in Pretoria, Johannesburg and surrounding Gauteng areas, battery sizing should start with the property's actual electricity consumption and the circuits that need backup.</p>

<p>For many homes, <strong>10–20kWh is a useful range to investigate</strong>. A 10kWh battery can suit essential backup and moderate evening use. A 15kWh battery gives more flexibility, while 20kWh or more can make sense for higher consumption or broader backup coverage.</p>

<p>The final design should also consider roof space, solar generation, shading, electrical supply, inverter capability and the homeowner's preferred backup strategy.</p>

<h2>Common battery-sizing mistakes on 8kW systems</h2>
<ul>
<li><strong>Matching kWh to kW.</strong> An 8kW inverter does not require an 8kWh battery.</li>
<li><strong>Ignoring usable capacity.</strong> Rated and usable kWh are not always the same.</li>
<li><strong>Ignoring average load.</strong> A high load can drain a battery much faster than a low essential load.</li>
<li><strong>Backing up every appliance.</strong> Separating essential and non-essential circuits can reduce storage requirements.</li>
<li><strong>Ignoring discharge power.</strong> The battery must be able to deliver the required instantaneous power.</li>
<li><strong>Ignoring solar recharge.</strong> A large battery needs sufficient surplus PV energy to recharge.</li>
<li><strong>Ignoring winter conditions.</strong> Seasonal solar production should be considered in the design.</li>
<li><strong>Ignoring compatibility.</strong> The battery and inverter must be electrically and electronically compatible.</li>
<li><strong>Choosing a battery before analysing usage.</strong> The load profile should drive the storage decision.</li>
</ul>

<h2>Questions to ask before buying an 8kW solar system with batteries</h2>
<ul>
<li>What is the property's average monthly electricity consumption?</li>
<li>What is the average evening and overnight load?</li>
<li>Which circuits must remain powered during load shedding?</li>
<li>How many hours of backup are required?</li>
<li>What is the battery's rated capacity?</li>
<li>What is its usable capacity?</li>
<li>What is the maximum continuous discharge power?</li>
<li>Can the proposed battery configuration support the 8kW inverter?</li>
<li>Can the solar array recharge the battery reliably?</li>
<li>How will the system perform during lower winter production?</li>
<li>Does the quotation include protection, cabling, installation, testing and compliance?</li>
<li>Can the battery bank be expanded later?</li>
</ul>

<h2>The practical answer for an 8kW solar system</h2>
<p>If you want a simple starting point, <strong>10–20kWh of battery storage is a useful range to investigate</strong> for an 8kW solar system in South Africa.</p>

<p><strong>10kWh</strong> can suit essential-load backup and moderate evening use. <strong>15kWh</strong> offers more flexibility for a larger household or greater evening energy shifting. <strong>20kWh or more</strong> becomes more relevant where the home has higher consumption, longer backup requirements or a broader whole-home backup objective.</p>

<p>The correct battery ultimately depends on your electricity usage, essential loads, required backup duration, inverter capability and the amount of solar energy available to recharge the storage.</p>

<h2>Get the right 8kW solar system for your property</h2>
<p>Solar8 supplies complete solar systems for South African homes and businesses. We can help you determine the right combination of inverter capacity, solar panels and battery storage based on your electricity usage, electrical supply, property and backup requirements.</p>

<p><a href="/assessment/">Get My FREE Assessment</a> and let Solar8 help you determine the right 8kW solar system and battery size for your property.</p>
`
    },
'''
s=s.replace(needle, ',\n'+article+'];\n\nexport function getBlogPost',1)
p.write_text(s,encoding='utf-8')
