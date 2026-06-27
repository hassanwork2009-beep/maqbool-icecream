import { createFileRoute } from "@tanstack/react-router";
import { Star, MapPin, Clock, Phone, Award, IceCream, Heart, CalendarCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import hero from "@/assets/hero-icecream.jpg";
import kulfi from "@/assets/kulfi.jpg";
import falooda from "@/assets/falooda.jpg";
import chocolate from "@/assets/chocolate.jpg";
import pista from "@/assets/pista.jpg";
import tuttifrutti from "@/assets/tuttifrutti.jpg";
import milkshake from "@/assets/milkshake.jpg";
import special from "@/assets/special.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maqbool Ice Cream — Peshawar's Most Loved Since Decades" },
      { name: "description", content: "Famous Maqbool Special, Kulfi, Falooda & milkshakes on GT Road, Tehkal, Peshawar. 4.1★ from 1,230+ reviews. Open till 2:30 AM." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

const menuFlavours = [
  { name: "Maqbool Special", desc: "Our signature creation — mixed scoops, fresh fruit, nuts, and house syrups.", img: special, popular: true },
  { name: "Maqbool Surprise", desc: "A layered surprise of flavours, crunch and rich cream.", img: tuttifrutti, popular: true },
  { name: "Special Falooda", desc: "Classic falooda — rose syrup, vermicelli, basil seeds, kulfi.", img: falooda, popular: true },
  { name: "Kulfi & Kulfa Badami", desc: "Traditional slow-cooked kulfi, dense, creamy, generously topped with almonds.", img: kulfi },
  { name: "Chocolate Sundae", desc: "Rich chocolate scoops drowned in house-made chocolate sauce.", img: chocolate },
  { name: "Pista Ice Cream", desc: "Roasted pistachio cream — nutty, fragrant, never too sweet.", img: pista },
  { name: "Tutti Frutti", desc: "A playful mix of candied fruit folded into vanilla cream.", img: tuttifrutti },
  { name: "Cold Coffee & Milkshakes", desc: "Thick, chilled and topped with whipped cream and chocolate.", img: milkshake },
];

type MenuItem = {
  name: string;
  price?: number;
  sizes?: { label: string; price: number }[];
};

type MenuCategory = {
  title: string;
  items: MenuItem[];
  fullWidth?: boolean;
};

const menuCategories: MenuCategory[] = [
  {
    title: "Fresh Soft Drinks",
    items: [
      { name: "Berries Smoothie", price: 750 },
      { name: "Strawberry Smoothie", price: 750 },
      { name: "Mango Banana Smoothie", price: 750 },
      { name: "Pina Colada Shake", price: 540 },
      { name: "Khajoor Badam Shake", price: 540 },
      { name: "Banana & Amrood Shake", price: 440 },
      { name: "Peach Shake", price: 440 },
      { name: "Strawberry Shake", price: 400 },
      { name: "Banana Milk Shake", price: 400 },
      { name: "Mint Margarita", price: 400 },
      { name: "Apple Juice", price: 430 },
      { name: "Orange Juice", price: 430 },
      { name: "Mango Milk Shake", price: 430 },
      { name: "Pineapple Milk Shake", price: 590 },
      { name: "Charmix", price: 500 },
    ],
  },
  {
    title: "Ice Cream Shakes",
    items: [
      { name: "Maqbool Freezy", price: 850 },
      { name: "Kulfa Badami", price: 850 },
      { name: "Choco Mint", price: 850 },
      { name: "Death By Chocolate", price: 850 },
      { name: "Oreo", price: 850 },
      { name: "Vanilla", price: 950 },
      { name: "Pistachio", price: 950 },
      { name: "Pine Apple", price: 950 },
      { name: "Chocolate", price: 950 },
      { name: "Strawberry", price: 950 },
      { name: "Mango", price: 950 },
      { name: "Blueberry", price: 950 },
      { name: "Raspberry", price: 950 },
      { name: "Coconut", price: 950 },
    ],
  },
  {
    title: "Cold Coffee",
    items: [
      { name: "Lotus Caramel Frappe", price: 780 },
      { name: "Berries Frappe", price: 780 },
      { name: "Mocha Frappe", price: 730 },
      { name: "Vanilla Pistachio Frappe", price: 730 },
      { name: "Blue Velvet", price: 730 },
      { name: "Iced Cappuccino", price: 730 },
    ],
  },
  {
    title: "Hot Coffee",
    items: [
      { name: "Café Latte", price: 410 },
      { name: "Hot Chocolate", price: 460 },
      { name: "Cappuccino", price: 460 },
      { name: "Café Mocha", price: 510 },
      { name: "Spanish Latte", price: 610 },
      { name: "Red Velvet Latte", price: 610 },
      { name: "Chocoberry Latte", price: 610 },
    ],
  },
  {
    title: "Special Flavours",
    items: [
      { name: "Maqbool Surprise", price: 800 },
      { name: "Special Kulfa Falooda", price: 700 },
      { name: "Special Falooda", price: 500 },
      { name: "Vanilla Special", price: 700 },
      { name: "Pistachio Special", price: 700 },
      { name: "Pine Apple Special", price: 700 },
      { name: "Tutti Frutti Special", price: 700 },
      { name: "Chocolate Special", price: 700 },
      { name: "Blue Berry Special", price: 700 },
      { name: "Raspberry Special", price: 700 },
      { name: "Maqbool Sunday Special", price: 700 },
    ],
  },
  {
    title: "Ice Cream Flavours",
    fullWidth: true,
    items: [
      { name: "Kulfa Badami", sizes: [
        { label: "Small Cup", price: 350 },
        { label: "Large Cup", price: 520 },
        { label: "Half Liter", price: 1080 },
        { label: "Full Liter", price: 2130 },
      ]},
      { name: "Pistachio", sizes: [
        { label: "Small Cup", price: 300 },
        { label: "Large Cup", price: 450 },
        { label: "Half Liter", price: 930 },
        { label: "Full Liter", price: 1830 },
      ]},
      { name: "Vanilla", sizes: [
        { label: "Small Cup", price: 300 },
        { label: "Large Cup", price: 450 },
        { label: "Half Liter", price: 930 },
        { label: "Full Liter", price: 1830 },
      ]},
      { name: "Pine Apple", sizes: [
        { label: "Small Cup", price: 300 },
        { label: "Large Cup", price: 450 },
        { label: "Half Liter", price: 930 },
        { label: "Full Liter", price: 1830 },
      ]},
      { name: "Chocolate", sizes: [
        { label: "Small Cup", price: 300 },
        { label: "Large Cup", price: 450 },
        { label: "Half Liter", price: 930 },
        { label: "Full Liter", price: 1830 },
      ]},
      { name: "Caramel Crunch", sizes: [
        { label: "Small Cup", price: 300 },
        { label: "Large Cup", price: 450 },
        { label: "Half Liter", price: 930 },
        { label: "Full Liter", price: 1830 },
      ]},
      { name: "Tutti Frutti", sizes: [
        { label: "Small Cup", price: 300 },
        { label: "Large Cup", price: 450 },
        { label: "Half Liter", price: 930 },
        { label: "Full Liter", price: 1830 },
      ]},
      { name: "Strawberry", sizes: [
        { label: "Small Cup", price: 300 },
        { label: "Large Cup", price: 450 },
        { label: "Half Liter", price: 930 },
        { label: "Full Liter", price: 1830 },
      ]},
      { name: "Mango", sizes: [
        { label: "Small Cup", price: 300 },
        { label: "Large Cup", price: 450 },
        { label: "Half Liter", price: 930 },
        { label: "Full Liter", price: 1830 },
      ]},
      { name: "Blue Berry", sizes: [
        { label: "Small Cup", price: 300 },
        { label: "Large Cup", price: 450 },
        { label: "Half Liter", price: 930 },
        { label: "Full Liter", price: 1830 },
      ]},
      { name: "Coconut", sizes: [
        { label: "Small Cup", price: 300 },
        { label: "Large Cup", price: 450 },
        { label: "Half Liter", price: 930 },
        { label: "Full Liter", price: 1830 },
      ]},
      { name: "Raspberry", sizes: [
        { label: "Small Cup", price: 300 },
        { label: "Large Cup", price: 450 },
        { label: "Half Liter", price: 930 },
        { label: "Full Liter", price: 1830 },
      ]},
      { name: "Oreo", sizes: [
        { label: "Small Cup", price: 300 },
        { label: "Large Cup", price: 450 },
        { label: "Half Liter", price: 930 },
        { label: "Full Liter", price: 1830 },
      ]},
    ],
  },
  {
    title: "Ice Cream Cones",
    items: [
      { name: "Small Cone", price: 260 },
      { name: "Large Cone", price: 410 },
      { name: "Dip Cone", price: 350 },
      { name: "Caramel Crunch Cone", price: 390 },
      { name: "Nuts Cream Cone", price: 550 },
    ],
  },
  {
    title: "Signature Dessert",
    items: [
      { name: "Maqbool Surprise Dessert", price: 800 },
    ],
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-display font-extrabold text-primary uppercase tracking-wider leading-none">
            <IceCream className="h-6 w-6" />
            <span className="flex flex-col items-start">
              <span aria-label="Maqbool Ice Cream" className="flex items-end">
                <span className="text-2xl">M</span>
                <span className="text-lg">A</span>
                <span className="text-2xl">Q</span>
                <span className="text-lg">B</span>
                <span className="text-2xl">O</span>
                <span className="text-lg">O</span>
                <span className="text-2xl">L</span>
              </span>
              <span className="text-[10px] tracking-[0.3em] text-primary/80 mt-0.5">ICE CREAM</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
            <a href="#story" className="hover:text-primary transition-colors">Our Story</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
            <a href="#visit" className="hover:text-primary transition-colors">Visit</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button asChild size="sm" className="bg-gradient-warm shadow-soft">
            <a href="#visit">Find Us</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 gap-10 px-6 py-20 lg:py-28 items-center">
          <div>
            <Badge variant="secondary" className="mb-5 bg-cream text-foreground border border-border">
              <Star className="h-3.5 w-3.5 mr-1 fill-primary text-primary" />
              4.1 · 1,230+ Google Reviews
            </Badge>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
              Peshawar's most-loved <span className="text-primary italic">ice cream</span>, scoop after scoop.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              From our legendary Maqbool Special to traditional kulfi and silky falooda — handcrafted on
              GT Road, Tehkal, and served fresh till the early hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-warm shadow-glow text-base">
                <a href="#menu">Explore the Menu</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <a href="https://www.google.com/maps/search/?api=1&query=Maqbool+Ice+Cream+Tehkal+Peshawar" target="_blank" rel="noreferrer">
                  <MapPin className="mr-2 h-4 w-4" /> Get Directions
                </a>
              </Button>
            </div>
            <div className="mt-10 flex gap-8 text-sm">
              <div><div className="font-display text-2xl font-bold text-primary">15+</div><div className="text-muted-foreground">Signature Flavours</div></div>
              <div><div className="font-display text-2xl font-bold text-primary">1,230+</div><div className="text-muted-foreground">Happy Reviews</div></div>
              <div><div className="font-display text-2xl font-bold text-primary">Till 2:30 AM</div><div className="text-muted-foreground">Open Late</div></div>
            </div>
          </div>
          <div className="relative">
            <img src={hero} alt="Strawberry ice cream cone — Maqbool Ice Cream" width={1536} height={1536}
              className="rounded-3xl shadow-glow object-cover w-full aspect-square" />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-soft p-5 hidden md:flex items-center gap-3 border border-border">
              <div className="h-12 w-12 rounded-full bg-gradient-warm flex items-center justify-center">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-display font-bold">Locally famous</div>
                <div className="text-xs text-muted-foreground">Loved by Peshawar for generations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="menu" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <Badge variant="secondary" className="mb-3">Menu Highlights</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Made the way it should be — slow, creamy, real.</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A handpicked selection from our most-loved flavours. Every scoop is churned in-house
            with whole milk, fresh fruit and traditional techniques.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuFlavours.map((f) => (
            <article key={f.name} className="group bg-card rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-glow transition-all hover:-translate-y-1">
              <div className="aspect-square overflow-hidden">
                <img src={f.img} alt={f.name} width={1024} height={1024} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-bold">{f.name}</h3>
                  {f.popular && <Badge className="bg-primary/10 text-primary border-0">Popular</Badge>}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Full menu with prices */}
        <div className="mt-16 space-y-10">
          <h3 className="font-display text-2xl font-bold">The Full Menu</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {menuCategories.map((cat) => (
              <div key={cat.title} className={"bg-card rounded-3xl p-6 md:p-8 border border-border shadow-soft" + (cat.fullWidth ? " md:col-span-2" : "")}>
                <h4 className="font-display text-xl font-bold mb-5 flex items-center gap-2">
                  <IceCream className="h-5 w-5 text-primary" />
                  {cat.title}
                </h4>
                {cat.fullWidth && cat.items[0]?.sizes ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left pb-2 font-semibold text-muted-foreground">Flavour</th>
                          {cat.items[0].sizes.map((s) => (
                            <th key={s.label} className="text-right pb-2 font-semibold text-muted-foreground px-2">{s.label}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {cat.items.map((item) => (
                          <tr key={item.name} className="border-b border-border/40">
                            <td className="py-2 text-foreground font-medium">{item.name}</td>
                            {item.sizes?.map((s) => (
                              <td key={s.label} className="py-2 text-right font-semibold text-primary px-2 whitespace-nowrap">Rs. {s.price}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cat.items.map((item) => (
                      <div key={item.name} className="flex items-center justify-between text-sm border-b border-border/60 pb-2">
                        <span className="text-foreground">{item.name}</span>
                        <span className="font-semibold text-primary">Rs. {item.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="bg-secondary/40 py-20 border-y border-border">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <img src={kulfi} alt="Traditional Kulfi" width={1024} height={1024} loading="lazy"
            className="rounded-3xl shadow-soft object-cover w-full aspect-[4/5]" />
          <div>
            <Badge variant="secondary" className="mb-3 bg-card">Our Story</Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              A Peshawar tradition, scooped fresh every day.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              For decades, families across Peshawar have made Maqbool Ice Cream their go-to spot — for
              an evening treat, a late-night craving, or simply the comfort of a recipe that hasn't
              changed since day one.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              We churn our ice cream in small batches, using whole milk, seasonal fruit, and time-honoured
              techniques. The kulfi is slow-cooked. The falooda is layered to order. And the Maqbool
              Special? You'll just have to try it.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Heart, label: "Made with love" },
                { icon: Award, label: "Locally famous" },
                { icon: IceCream, label: "15+ flavours" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="bg-card rounded-2xl p-4 text-center border border-border">
                  <Icon className="h-6 w-6 mx-auto text-primary mb-2" />
                  <div className="text-sm font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="container mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-3">Loved by Peshawar</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold">4.1 stars from over 1,230 reviews</h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[1,2,3,4].map(i => <Star key={i} className="h-6 w-6 fill-primary text-primary" />)}
            <Star className="h-6 w-6 fill-primary/40 text-primary" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Asad K.", text: "The Maqbool Special is unreal. Been coming here since I was a kid and it still hits the same.", stars: 5 },
            { name: "Hira S.", text: "Their falooda and kulfi are the best in Peshawar. Open late, perfect after dinner.", stars: 5 },
            { name: "Bilal A.", text: "Authentic flavours, generous portions, friendly staff. A Tehkal landmark.", stars: 4 },
          ].map((r) => (
            <div key={r.name} className="bg-card rounded-3xl p-6 border border-border shadow-soft">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">"{r.text}"</p>
              <div className="mt-4 text-sm font-semibold text-muted-foreground">— {r.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="bg-gradient-warm text-primary-foreground py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">Come visit us tonight.</h2>
            <p className="mt-4 text-lg opacity-90 max-w-lg">
              We're open late, every day. Stop by for a scoop, a falooda, or a milkshake to-go.
            </p>
            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Find us</div>
                  <div className="opacity-90">27, Sial Flat, GT Road, Tehkal, Peshawar</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="h-6 w-6 shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Open daily</div>
                  <div className="opacity-90">Until 2:30 AM · Live: not too busy</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="h-6 w-6 shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Call ahead</div>
                  <div className="opacity-90">For large orders & events</div>
                </div>
              </div>
            </div>
            <Button asChild size="lg" variant="secondary" className="mt-8 shadow-glow">
              <a href="https://www.google.com/maps/search/?api=1&query=Maqbool+Ice+Cream+Tehkal+Peshawar" target="_blank" rel="noreferrer">
                <MapPin className="mr-2 h-4 w-4" /> Open in Google Maps
              </a>
            </Button>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-glow border-4 border-primary-foreground/20 aspect-[4/3]">
            <iframe
              title="Maqbool Ice Cream location"
              src="https://www.google.com/maps?q=Maqbool+Ice+Cream+Tehkal+Peshawar&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Contact & Reservation */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="bg-card rounded-3xl border border-border shadow-soft overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12">
              <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
                Reserve your table or order now.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Planning a family gathering or craving a midnight scoop? Message us on WhatsApp for quick reservations, bulk orders, or home delivery.
              </p>
              <div className="space-y-4">
                <a
                  href="https://wa.me/923336660966"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/15 transition-colors"
                >
                  <div className="h-12 w-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">WhatsApp Us</div>
                    <div className="text-sm text-muted-foreground">+92 333 666 0966</div>
                  </div>
                </a>
                <a
                  href="tel:+923336660966"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors"
                >
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Call Us</div>
                    <div className="text-sm text-muted-foreground">+92 333 666 0966</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-gradient-warm p-8 md:p-12 flex flex-col justify-center text-primary-foreground">
              <CalendarCheck className="h-10 w-10 mb-4 opacity-90" />
              <h3 className="font-display text-2xl font-bold mb-3">Reserve Your Table</h3>
              <p className="opacity-90 leading-relaxed mb-6">
                Celebrating a birthday, anniversary, or just a family night out? Reserve a table in advance and we'll have your favourite flavours ready.
              </p>
              <Button asChild size="lg" variant="secondary" className="w-fit shadow-glow">
                <a href="https://wa.me/923336660966?text=Hi%20Maqbool%20Ice%20Cream,%20I'd%20like%20to%20reserve%20a%20table." target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> Reserve via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 font-display font-bold text-lg">
              <IceCream className="h-5 w-5" /> Maqbool Ice Cream
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/maqboolicecreamofficial/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/maqboolicecreamofficial/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@maqboolicecreamofficial/"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-70">© {new Date().getFullYear()} Maqbool Ice Cream · GT Road, Tehkal, Peshawar</p>
            <p className="text-sm opacity-70">Open daily until 2:30 AM</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
