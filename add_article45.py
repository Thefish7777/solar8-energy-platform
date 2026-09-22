from pathlib import Path
import zipfile, hashlib, re
root=Path('/mnt/data/a45')
blog=root/'src/data/blog.ts'
s=blog.read_text()
slug='15kw-solar-system-with-battery-cost-south-africa'
assert s.count(slug)==0
article=r'''    {
        slug: "15kw-solar-system-with-battery-cost-south-africa",
        title: "How Much Does a 15kW Solar System With Battery Cost in South Africa?",
        description: "How much does a 15kW solar system with battery cost in South Africa in 2026? Compare battery sizes, solar panels, inverter options, installation, three-phase requirements and what affects the final price.",
        category: "system-sizing",
        publishedAt: "2026-09-17",
        updatedAt: "2026-09-17",
        readingTime: "11 min read",
        content: `
<p>If you are looking at a <strong>15kW solar system with battery storage in South Africa</strong>, you are generally looking at a larger residential, estate, farm or small-commercial installation. At this size, the final price can vary substantially because the system may be designed for daytime electricity savings, serious load-shedding backup, high evening consumption, or a combination of all three.</p>

<p>As a broad <strong>2026 planning guide</strong>, a complete installed 15kW solar system with battery storage can commonly fall in the region of <strong>R280,000 to R430,000+</strong> for a substantial battery-backed installation. Simpler configurations can be lower, while premium equipment, larger batteries, more solar panels and complex three-phase electrical work can push the total above this range.</p>

<p>Published South African examples show just how wide the market can be. One current 15kW three-phase example with 30kWh of battery storage and 16 solar panels is listed around R280,000–R430,000, while another fully installed 15kW system with 27.12kWh of battery storage and 21.12kWp of solar panels is listed at about R387,872. These are market examples, not Solar8 prices, and the included equipment and installation scope differ between suppliers. citeturn0search12turn0search1</p>

<h2>What does a 15kW solar system with battery mean?</h2>
<p>A 15kW solar system normally refers to the inverter or system's AC power capacity. It does <strong>not</strong> automatically mean that the system has 15kWp of solar panels or a 15kWh battery.</p>

<p>There are three important measurements:</p>
<ul>
<li><strong>15kW inverter capacity:</strong> the approximate AC power the inverter can deliver, subject to its specifications and installation.</li>
<li><strong>Solar-array capacity:</strong> the combined rated output of the solar panels, expressed in kWp.</li>
<li><strong>Battery capacity:</strong> the amount of stored energy, expressed in kWh.</li>
</ul>

<p>For example, a 15kW hybrid system could have around 15kWp, 18kWp or more of solar panels and could have 15kWh, 20kWh, 30kWh or substantially more battery storage. The correct combination depends on the property and the inverter's specifications.</p>

<h2>How much does a 15kW solar system with battery cost?</h2>
<p>For budgeting purposes, a useful broad 2026 range is:</p>

<table>
<thead><tr><th>Example configuration</th><th>Broad planning range</th></tr></thead>
<tbody>
<tr><td>15kW solar + 15kWh battery</td><td>R240,000–R330,000+</td></tr>
<tr><td>15kW solar + 20kWh battery</td><td>R260,000–R360,000+</td></tr>
<tr><td>15kW solar + 30kWh battery</td><td>R280,000–R430,000+</td></tr>
<tr><td>15kW solar + 40kWh+ battery</td><td>R350,000–R500,000+</td></tr>
</tbody>
</table>

<p>These figures are deliberately broad because a 15kW system can be built with very different equipment and installation scopes. A premium system with advanced monitoring, substantial battery storage and a large PV array is not directly comparable with a budget-oriented system designed around essential backup.</p>

<p>For context, one current 2026 market guide puts 15kW solar systems at roughly R220,000–R380,000 before considering exactly how much battery storage is included, while current installed 15kW examples with 27–30kWh batteries extend into the high R300,000 range. citeturn0search0turn0search1turn0search14</p>

<h2>Why does a 15kW solar system cost so much?</h2>
<p>A complete 15kW installation combines several major components. The final price is not simply the cost of a 15kW inverter.</p>

<h3>15kW hybrid inverter</h3>
<p>The inverter is responsible for converting solar DC electricity into usable AC electricity and, in a hybrid system, managing the relationship between solar panels, batteries, the property and the grid.</p>

<p>At this system size, the inverter may be three-phase and needs to be selected around the property's electrical supply, maximum demand, PV input limits, battery compatibility and required backup operation.</p>

<h3>Solar panels</h3>
<p>A 15kW inverter does not necessarily need exactly 15kWp of panels. Modern systems can often use a larger DC array, provided the inverter's maximum PV voltage, current and input capacity are respected.</p>

<p>For example:</p>
<ul>
<li>24 × 550W panels = 13.2kWp</li>
<li>28 × 550W panels = 15.4kWp</li>
<li>30 × 550W panels = 16.5kWp</li>
<li>24 × 600W panels = 14.4kWp</li>
<li>28 × 600W panels = 16.8kWp</li>
</ul>

<p>These are examples rather than a recommendation. Panel wattage, roof space, orientation, shading and the inverter's MPPT requirements all affect the final design.</p>

<h3>Battery storage</h3>
<p>Battery storage is one of the largest variables in the price of a 15kW system.</p>

<p>A 15kWh battery is a very different system from a 30kWh or 40kWh battery bank. The larger battery provides more stored energy for evening consumption and longer backup, but it also requires appropriate charging and discharge capability.</p>

<h3>Installation and electrical work</h3>
<p>A 15kW system is a substantial electrical installation. Depending on the property, the quotation may need to account for additional AC and DC protection, larger cable runs, DB-board modifications, battery isolation, mounting structures, earthing, commissioning and compliance documentation.</p>

<h2>How much battery storage do you need with a 15kW solar system?</h2>
<p>The correct battery size depends on what you want the battery to do.</p>

<h3>15kWh battery</h3>
<p>A 15kWh battery can be appropriate where the main goals are evening energy shifting and essential backup. It can provide meaningful stored energy without making the battery bank unnecessarily large.</p>

<h3>20kWh battery</h3>
<p>A 20kWh battery gives a larger reserve for evening consumption and can suit a high-consumption home where selected appliances need to remain operational during an outage.</p>

<h3>30kWh battery</h3>
<p>A 30kWh battery is a common scale to consider for a larger home, estate, farm or small business where substantial loads may need to continue operating after sunset.</p>

<p>One current South African 15kW package, for example, uses approximately 27.12kWh of battery storage with 21.12kWp of solar panels, illustrating how a larger system can be designed around both substantial generation and storage. citeturn0search1</p>

<h3>40kWh or more</h3>
<p>Very large battery banks become relevant when the objective is extended backup, substantial overnight consumption or much greater independence from the grid.</p>

<p>At this point, battery power becomes just as important as battery capacity. You need to know not only how many kWh are stored, but also how many kW the battery system can continuously deliver.</p>

<h2>How long will a 30kWh battery last?</h2>
<p>Battery runtime depends on the actual average load.</p>

<p>If a 30kWh battery provided 27kWh of usable energy after reserve and system losses, a simplified calculation would look like this:</p>
<ul>
<li><strong>1kW average load:</strong> about 27 hours</li>
<li><strong>2kW average load:</strong> about 13.5 hours</li>
<li><strong>3kW average load:</strong> about 9 hours</li>
<li><strong>5kW average load:</strong> about 5.4 hours</li>
<li><strong>7.5kW average load:</strong> about 3.6 hours</li>
</ul>

<p>These are simplified planning examples. Actual runtime depends on usable battery capacity, inverter efficiency, battery reserve settings and how the household's load changes over time.</p>

<p>A property that averages 2kW overnight will therefore use its battery very differently from a property running several air conditioners, a pool pump, geyser or other high-power equipment.</p>

<h2>Can a 15kW solar system run a geyser, pool pump and air conditioner?</h2>
<p>A properly designed 15kW system can support substantial household loads, but the answer depends on what operates at the same time.</p>

<p>Possible high-demand loads include:</p>
<ul>
<li>Electric geysers</li>
<li>Swimming-pool pumps</li>
<li>Air conditioners</li>
<li>Ovens and electric stoves</li>
<li>Borehole pumps</li>
<li>Heat pumps</li>
<li>Workshop equipment</li>
<li>Electric vehicle charging</li>
</ul>

<p>The inverter needs enough output power to handle the combined demand, including appropriate consideration of motor starting currents where applicable.</p>

<p>A well-designed system can also use daytime solar production for high-energy appliances while preserving battery storage for evening consumption and backup.</p>

<h2>How many solar panels does a 15kW system need?</h2>
<p>The answer depends on the wattage of the panels and the desired PV array size.</p>

<table>
<thead><tr><th>Panel wattage</th><th>Approximate panels for 15kWp</th></tr></thead>
<tbody>
<tr><td>450W</td><td>34 panels</td></tr>
<tr><td>500W</td><td>30 panels</td></tr>
<tr><td>550W</td><td>28 panels</td></tr>
<tr><td>600W</td><td>25 panels</td></tr>
<tr><td>620W</td><td>25 panels</td></tr>
</tbody>
</table>

<p>For example, 28 × 550W panels provide 15.4kWp. However, an installer may select a different array size because of roof space, panel availability, MPPT configuration, shading or the inverter manufacturer's permitted DC oversizing.</p>

<p>Our existing guide on <a href="/blog/how-many-solar-panels-for-15kw-system-south-africa/">how many solar panels are needed for a 15kW system</a> goes into the panel-count question in more detail.</p>

<h2>Is a 15kW system usually three-phase?</h2>
<p>For a 15kW installation, <strong>three-phase becomes an important consideration</strong>, particularly for larger homes, estates, farms and commercial properties.</p>

<p>The correct inverter configuration depends on the property's existing electrical supply and the equipment selected. Do not assume that every 15kW inverter can be installed on every property.</p>

<p>A three-phase installation also needs to be designed so that the inverter, backup circuits, protection equipment and distribution board work correctly together.</p>

<h2>What can a 15kW solar system run?</h2>
<p>A 15kW system can potentially support a large range of household or business loads, depending on the system design.</p>

<p>For a larger home, that could include:</p>
<ul>
<li>Refrigerators and freezers</li>
<li>Lighting</li>
<li>Televisions and computers</li>
<li>Internet and security systems</li>
<li>Geysers</li>
<li>Pool equipment</li>
<li>Air conditioners</li>
<li>Washing machines and dishwashers</li>
<li>Ovens</li>
<li>Borehole pumps</li>
</ul>

<p>For a small business, it could also support office equipment, refrigeration, pumps, workshop equipment or other commercial loads, subject to the inverter's output and the property's demand profile.</p>

<p>The important distinction is between <strong>what the inverter can power at one moment</strong> and <strong>how much energy the battery can supply over several hours</strong>.</p>

<h2>15kW solar system with 15kWh vs 30kWh battery</h2>
<p>Choosing between these configurations comes down largely to your backup and energy-shifting requirements.</p>

<table>
<thead><tr><th>Feature</th><th>15kWh battery</th><th>30kWh battery</th></tr></thead>
<tbody>
<tr><td>Stored energy</td><td>Moderate</td><td>High</td></tr>
<tr><td>Evening energy shifting</td><td>Good for moderate loads</td><td>Better for high loads</td></tr>
<tr><td>Backup duration</td><td>Shorter</td><td>Longer</td></tr>
<tr><td>High-load backup</td><td>More limited</td><td>More capable</td></tr>
<tr><td>System cost</td><td>Lower</td><td>Higher</td></tr>
</tbody>
</table>

<p>If your objective is mainly to keep essential circuits running through outages, 15kWh may be sufficient. If you want substantially more of the property operating through a long outage, 30kWh or more may be appropriate.</p>

<h2>What is included in a complete 15kW solar system?</h2>
<p>When comparing quotations, check that the scope includes all of the equipment and installation work required for a functioning system.</p>

<p>A complete system may include:</p>
<ul>
<li>15kW hybrid inverter</li>
<li>Solar panels</li>
<li>Lithium battery storage</li>
<li>Roof mounting structures</li>
<li>Solar cables and connectors</li>
<li>DC isolators and protection</li>
<li>AC protection</li>
<li>Battery isolation and protection</li>
<li>Distribution-board modifications where required</li>
<li>Earthing and bonding</li>
<li>Monitoring equipment</li>
<li>Installation and commissioning</li>
<li>Compliance documentation and Certificate of Compliance where applicable</li>
</ul>

<p>A quotation that excludes some of these items can initially look cheaper while leaving substantial costs outside the headline price.</p>

<h2>How much roof space does a 15kW solar system need?</h2>
<p>Roof space depends on the panel size and the final PV array.</p>

<p>A system using 28 × 550W panels requires substantially less panel area than an equivalent 450W-panel design because fewer panels are needed. However, installers also need to allow for roof geometry, access, setbacks and mounting requirements.</p>

<p>Roof orientation and shading are equally important. A large roof is not automatically a good solar roof if substantial areas are shaded during productive hours.</p>

<h2>What affects the cost of installation?</h2>
<p>The final installation price can change because of:</p>
<ul>
<li>Roof type and condition</li>
<li>Roof height and access</li>
<li>Distance between panels and inverter</li>
<li>Distance between inverter and battery</li>
<li>DB-board modifications</li>
<li>Single-phase or three-phase supply</li>
<li>Backup-circuit configuration</li>
<li>Additional protection equipment</li>
<li>Earthing requirements</li>
<li>Municipal or utility requirements</li>
<li>Site-specific electrical work</li>
</ul>

<p>For larger systems, these details can have a meaningful effect on the final quotation.</p>

<h2>How should you compare 15kW solar quotations?</h2>
<p>Do not compare quotations based only on the total price.</p>

<p>Ask each installer for the exact:</p>
<ol>
<li>Inverter manufacturer and model</li>
<li>Inverter output and phase configuration</li>
<li>Total solar-array capacity in kWp</li>
<li>Number and wattage of panels</li>
<li>Battery manufacturer and model</li>
<li>Battery rated capacity in kWh</li>
<li>Battery usable capacity</li>
<li>Battery continuous discharge power</li>
<li>Backup circuits included</li>
<li>Mounting structures and cable scope</li>
<li>AC and DC protection</li>
<li>Installation and commissioning</li>
<li>Certificate of Compliance and other required documentation</li>
<li>Equipment warranties</li>
<li>Future battery-expansion options</li>
</ol>

<p>This makes it much easier to identify whether two apparently similar quotations are actually offering the same system.</p>

<h2>Is a 15kW solar system with battery worth it?</h2>
<p>A 15kW system can make sense when a property has sufficiently high electricity consumption to use the available generation and inverter capacity.</p>

<p>It is particularly relevant for larger homes, estates, farms and small businesses where electricity demand is high and reliable backup is important.</p>

<p>The battery should be sized according to the property's actual evening and backup requirements rather than simply matching the inverter's 15kW rating with a 15kWh battery.</p>

<p>For comparison, our existing <a href="/blog/15kw-solar-system-cost-south-africa/">15kW solar system cost guide</a> looks at the cost of the broader 15kW system, while our <a href="/blog/how-much-battery-storage-for-15kw-solar-system-south-africa/">15kW battery-storage guide</a> focuses specifically on how much battery capacity you may need.</p>

<h2>Get a 15kW solar system designed for your property</h2>
<p>Solar8 supplies complete solar systems for South African homes and businesses. The right combination of inverter capacity, solar panels and battery storage depends on your electricity consumption, peak demand, roof, electrical supply and backup requirements.</p>

<p>Instead of choosing a 15kW system simply because it is a popular size, have the complete system designed around how your property actually uses electricity.</p>

<p><a href="/assessment/">Get My FREE Assessment</a> and let Solar8 help you determine the right 15kW solar array, inverter and battery configuration for your property.</p>
`
    },
'''
# Insert before final array close. Keep exactly one comma before article and final array close.
marker='\n];\n\nexport function getBlogPost'
idx=s.rfind(marker)
assert idx!=-1
s=s[:idx]+'\n'+article.rstrip('\n')+s[idx:]
blog.write_text(s)

# sitemap: insert before closing urlset
sm=root/'public/sitemap.xml'
ss=sm.read_text()
assert 'https://solar8.co.za/blog/15kw-solar-system-with-battery-cost-south-africa/' not in ss
close='</urlset>'
assert close in ss
entry='  <url><loc>https://solar8.co.za/blog/15kw-solar-system-with-battery-cost-south-africa/</loc><lastmod>2026-09-17</lastmod></url>\n'
ss=ss.replace(close,entry+close,1)
sm.write_text(ss)

# Integrity checks
bs=blog.read_text()
assert bs.count(slug)==1
assert '\\n' not in bs
assert '},,' not in bs
assert '},,\n' not in bs
assert 'export function getBlogPost' in bs
assert ss.count('15kw-solar-system-with-battery-cost-south-africa')==1

out=Path('/mnt/data/Solar8-Blog-Article45-v1.2-CUMULATIVE.zip')
with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED) as z:
    for p in root.rglob('*'):
        if p.is_file():
            z.write(p,p.relative_to(root))
print('zip',out,out.stat().st_size)
print('sha256',hashlib.sha256(out.read_bytes()).hexdigest())
print('blog slug count',bs.count(slug))
print('sitemap count',ss.count(slug))
