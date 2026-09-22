from pathlib import Path
import re
p=Path('src/data/blog.ts')
s=p.read_text(encoding='utf-8')
photos={
21:("/images/blog/solar-panels-10kw-system-south-africa.jpg","https://images.unsplash.com/photo-1780445392628-d6f5b9e5609b?auto=format&fit=crop&fm=jpg&q=80&w=1600","Solar panels installed on a residential rooftop for a 10kW solar system in South Africa"),
22:("/images/blog/15kw-solar-system-south-africa.jpg","https://images.unsplash.com/photo-1771479755134-9c1e3143c110?auto=format&fit=crop&fm=jpg&q=80&w=1600","Large residential solar panel installation suitable for a 15kW solar system"),
23:("/images/blog/20kw-solar-system-south-africa.jpg","https://images.unsplash.com/photo-1771479755134-9c1e3143c110?auto=format&fit=crop&fm=jpg&q=80&w=1600","Large rooftop solar installation for a high-capacity 20kW solar system"),
24:("/images/blog/solar-battery-storage-10kw-system.jpg","https://images.unsplash.com/photo-1780445392417-68b9dccc45f2?auto=format&fit=crop&fm=jpg&q=80&w=1600","Wall-mounted solar battery storage for a 10kW solar system"),
25:("/images/blog/5kw-solar-system-with-battery-south-africa.jpg","https://images.unsplash.com/photo-1780445392792-556e5609c5ab?auto=format&fit=crop&fm=jpg&q=80&w=1600","Complete residential solar system with rooftop panels for home battery backup"),
26:("/images/blog/10kwh-solar-battery-south-africa.jpg","https://images.unsplash.com/photo-1780445392417-68b9dccc45f2?auto=format&fit=crop&fm=jpg&q=80&w=1600","Wall-mounted 10kWh-class lithium solar battery storage system"),
27:("/images/blog/10kwh-solar-battery-load-shedding.jpg","https://images.unsplash.com/photo-1780445392417-68b9dccc45f2?auto=format&fit=crop&fm=jpg&q=80&w=1600","Solar battery storage providing backup power during load shedding"),
28:("/images/blog/6kw-solar-system-south-africa.jpg","https://images.unsplash.com/photo-1780445392792-556e5609c5ab?auto=format&fit=crop&fm=jpg&q=80&w=1600","Residential rooftop solar installation for a 6kW solar system in South Africa"),
29:("/images/blog/12kw-solar-system-south-africa.jpg","https://images.unsplash.com/photo-1771479755134-9c1e3143c110?auto=format&fit=crop&fm=jpg&q=80&w=1600","Large residential rooftop solar installation for a 12kW solar system"),
30:("/images/blog/solar-panels-8kw-system-south-africa.jpg","https://images.unsplash.com/photo-1780445392628-d6f5b9e5609b?auto=format&fit=crop&fm=jpg&q=80&w=1600","Solar panels installed on a South African rooftop for an 8kW solar system"),
}
titles=re.findall(r"title:\s*['\"]([^'\"]+)['\"]",s)
assert len(titles)>=30
for n in range(21,31):
    title=titles[n-1]
    # locate title and its object start
    m=re.search(r"\n    \{\n        slug:[\s\S]*?title: ['\"]"+re.escape(title)+r"['\"],",s)
    if not m: raise SystemExit(f'missing {n} {title}')
    start=m.start(); end=m.end()
    # find category line after title
    cat=re.search(r"\n        category: [^\n]+,",s[end:])
    if not cat: raise SystemExit('no category')
    insert_at=end+cat.start()
    img,url,alt=photos[n]
    block=f"\n        image: '{img}',\n        imageUrl: '{url}',\n        imageAlt: '{alt}',\n        imageFilename: '{Path(img).name}',"
    s=s[:insert_at]+block+s[insert_at:]
p.write_text(s,encoding='utf-8')
