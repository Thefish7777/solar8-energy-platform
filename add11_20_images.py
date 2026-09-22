from pathlib import Path
import re
p=Path('src/data/blog.ts')
s=p.read_text()
items={
'10kw-solar-system-cost-south-africa':('https://images.unsplash.com/photo-1655300283246-1ef0317a565d?auto=format&fit=crop&fm=jpg&q=82&w=1800','10kW solar system installed on a residential home with rooftop solar panels'),
'can-solar-run-geyser-pool-pump-aircon-south-africa':('https://images.unsplash.com/photo-1695326288959-89be49070059?auto=format&fit=crop&fm=jpg&q=82&w=1800','Residential swimming pool and home setting in South Africa for solar-powered appliances'),
'hybrid-vs-grid-tied-vs-off-grid-solar-south-africa':('https://images.unsplash.com/photo-1780445392484-38a4852a1fd8?auto=format&fit=crop&fm=jpg&q=82&w=1800','Solar inverter and backup generator equipment in a South African solar installation'),
'how-long-will-solar-battery-last-load-shedding-south-africa':('https://images.unsplash.com/photo-1780445392417-68b9dccc45f2?auto=format&fit=crop&fm=jpg&q=82&w=1800','Wall-mounted solar inverter and battery storage system for backup power'),
'solar-battery-vs-generator-load-shedding-south-africa':('https://images.unsplash.com/photo-1780445392484-38a4852a1fd8?auto=format&fit=crop&fm=jpg&q=82&w=1800','Solar inverter and generator backup equipment for load shedding'),
'8kw-solar-system-cost-south-africa':('https://images.unsplash.com/photo-1770567764570-ebe9b5d0c02b?auto=format&fit=crop&fm=jpg&q=82&w=1800','Large residential home with rooftop solar panels'),
'how-much-solar-do-i-need-3-bedroom-house-south-africa':('https://images.unsplash.com/photo-1655300283246-1ef0317a565d?auto=format&fit=crop&fm=jpg&q=82&w=1800','Solar panels installed on a residential home in South Africa'),
'how-much-solar-do-i-need-4-bedroom-house-south-africa':('https://images.unsplash.com/photo-1770567764570-ebe9b5d0c02b?auto=format&fit=crop&fm=jpg&q=82&w=1800','Large South African home with solar panels on the roof'),
'how-much-solar-do-i-need-large-house-south-africa':('https://images.unsplash.com/photo-1770567764570-ebe9b5d0c02b?auto=format&fit=crop&fm=jpg&q=82&w=1800','Large residential home with rooftop solar panels for high electricity use'),
'can-solar-panels-power-house-during-load-shedding-south-africa':('https://images.unsplash.com/photo-1780445392417-68b9dccc45f2?auto=format&fit=crop&fm=jpg&q=82&w=1800','Home solar inverter and battery storage system providing backup power'),
}
for slug,(url,alt) in items.items():
    pat=r'(\{\s*\n\s*slug:\s*[\'\"]'+re.escape(slug)+r'[\'\"],.*?\n)(\s*readingTime:)'
    m=re.search(pat,s,re.S)
    if not m:
        raise SystemExit(f'missing {slug}')
    block=m.group(1)
    if 'imageAlt:' in block or 'imageUrl:' in block:
        continue
    repl=block + f'        imageUrl: {url!r},\n        imageAlt: {alt!r},\n'
    s=s[:m.start(1)]+repl+s[m.end(1):]
p.write_text(s)
print('updated',len(items),'articles')
