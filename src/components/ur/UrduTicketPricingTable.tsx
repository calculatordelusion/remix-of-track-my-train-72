import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Percent, Shield, Smartphone, Users, Wallet } from "lucide-react";

const pricingData = [
  { route: "کراچی ←→ لاہور", economy: "3,750", acStandard: "7,600", acBusiness: "10,950", acSleeper: "14,050", duration: "18-22 گھنٹے" },
  { route: "کراچی ←→ راولپنڈی", economy: "4,200", acStandard: "10,450", acBusiness: "11,450", acSleeper: "16,550", duration: "22-26 گھنٹے" },
  { route: "کراچی ←→ پشاور", economy: "4,900", acStandard: "11,550", acBusiness: "13,300", acSleeper: "—", duration: "24-28 گھنٹے" },
  { route: "کراچی ←→ ملتان", economy: "2,750", acStandard: "5,900", acBusiness: "8,400", acSleeper: "11,200", duration: "14-17 گھنٹے" },
  { route: "کراچی ←→ حیدرآباد", economy: "750", acStandard: "1,500", acBusiness: "—", acSleeper: "—", duration: "2-3 گھنٹے" },
  { route: "راولپنڈی ←→ لاہور", economy: "1,100", acStandard: "1,950", acBusiness: "2,150", acSleeper: "2,400", duration: "4-5 گھنٹے" },
  { route: "راولپنڈی ←→ پشاور", economy: "750", acStandard: "1,500", acBusiness: "2,000", acSleeper: "—", duration: "3-4 گھنٹے" },
  { route: "راولپنڈی ←→ ملتان", economy: "2,200", acStandard: "3,900", acBusiness: "5,400", acSleeper: "8,150", duration: "8-10 گھنٹے" },
  { route: "لاہور ←→ ملتان", economy: "1,100", acStandard: "2,100", acBusiness: "3,300", acSleeper: "5,800", duration: "5-6 گھنٹے" },
  { route: "لاہور ←→ پشاور", economy: "1,950", acStandard: "3,500", acBusiness: "4,800", acSleeper: "—", duration: "7-9 گھنٹے" },
];

const coachClasses = [
  { cls: "اکانومی سیٹ", fareRange: "₨370 – ₨6,350", gradient: "gradient-card-emerald", desc: "فین کولڈ کوچ میں بنیادی نشست۔ سب سے سستا آپشن۔ تمام ایکسپریس اور مسافر ٹرینوں پر دستیاب۔ قیمت ٹرین ٹائپ کے مطابق مختلف ہوتی ہے۔", features: ["کم کرایہ", "زیادہ دستیابی", "عام نشستیں"] },
  { cls: "اکانومی برتھ", fareRange: "₨420 – ₨6,450", gradient: "gradient-card-amber", desc: "فین کولڈ کوچ میں سونے کی برتھ۔ رات کے سفر کے لیے اکانومی سیٹ سے بہتر۔ عام طور پر سیٹ سے ₨50-100 زیادہ۔", features: ["سونے کی برتھ", "رات کے سفر کے لیے بہتر", "معمولی اضافی قیمت"] },
  { cls: "AC اسٹینڈرڈ", fareRange: "₨1,350 – ₨12,250", gradient: "gradient-card-blue", desc: "ائیرکنڈیشنڈ کوچ — گرمیوں اور طویل سفر میں زیادہ آرام دہ۔ زیادہ تر ایکسپریس ٹرینوں پر دستیاب۔", features: ["مکمل AC", "طویل سفر کے لیے بہتر", "نسبتاً آرام دہ"] },
  { cls: "AC بزنس", fareRange: "₨2,000 – ₨15,350", gradient: "gradient-card-purple", desc: "پریمیم AC کلاس — چوڑی نشستیں، بہتر لیگ روم، اور بہتر کوچ معیار۔ شالیمار، عوام، قراقرم، خیبر میل، اور گرین لائن پر دستیاب۔", features: ["چوڑی نشستیں", "پریمیم آرام", "بہتر سہولیات"] },
  { cls: "AC سلیپر / پارلر", fareRange: "₨2,400 – ₨17,500", gradient: "gradient-card-rose", desc: "AC سلیپنگ برتھ — رات بھر کے طویل سفر کے لیے بہترین۔ بستر اور کمبل فراہم۔ تیزگام، خیبر میل، اور جعفر ایکسپریس پر دستیاب۔", features: ["AC سلیپنگ برتھ", "بستر فراہم", "طویل سفر کے لیے بہتر"] },
];

const discountCards = [
  { icon: Percent, title: "طلباء رعایت", desc: "معتبر طلباء شناخت کے ساتھ عموماً 25% تک رعایت دستیاب ہو سکتی ہے۔", gradient: "gradient-card-emerald" },
  { icon: Users, title: "بچوں کے قواعد", desc: "3 سال سے کم بچے بغیر الگ نشست کے مفت، 3 سے 12 سال تک اکثر آدھا کرایہ۔", gradient: "gradient-card-amber" },
  { icon: Shield, title: "خصوصی رعایتیں", desc: "بزرگ شہریوں، معذور افراد، یا مخصوص کیٹیگریز کے لیے رعایتی پالیسی لاگو ہو سکتی ہے۔", gradient: "gradient-card-blue" },
];

const bookingSteps = [
  { icon: Smartphone, title: "روٹ اور تاریخ منتخب کریں", desc: "اپنی روانگی، منزل، اور مطلوبہ تاریخ پہلے فائنل کریں تاکہ درست کرایہ سامنے آئے۔" },
  { icon: CreditCard, title: "کلاس compare کریں", desc: "صرف کم قیمت نہ دیکھیں، بلکہ دورانیہ اور comfort کے مطابق class منتخب کریں۔" },
  { icon: Wallet, title: "ادائیگی اور تصدیق", desc: "آن لائن یا کاؤنٹر بکنگ کے بعد ticket details اور CNIC ready رکھیں۔" },
];

export default function UrduTicketPricingTable() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 space-y-10">
      <Card className="border bg-accent/5 border-accent/20">
        <CardContent className="p-5 text-sm leading-relaxed text-muted-foreground">
          <span className="font-bold text-foreground">نوٹ:</span> یہ کرایے پاکستان ریلوے کی تازہ ترین فیئر ٹیبل (مارچ 9, 2026 سے نافذ — اکانومی +5%، AC +10% اضافہ) کے مطابق ہیں۔ پریمیم ٹرینیں (گرین لائن، تیزگام) کے کرایے زیادہ ہوتے ہیں۔
        </CardContent>
      </Card>

      <section className="space-y-5">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-black">اہم روٹس کا کرایہ چارٹ</h2>
          <p className="text-sm text-muted-foreground mt-2">اکانومی سے AC بزنس تک مختلف کلاسز کا واضح موازنہ</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border bg-card shadow-sm">
          <table className="w-full text-sm min-w-[760px]">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-right p-4 font-bold">روٹ</th>
                <th className="text-right p-4 font-bold">اکانومی</th>
                <th className="text-right p-4 font-bold">AC اسٹینڈرڈ</th>
                <th className="text-right p-4 font-bold">AC بزنس</th>
                <th className="text-right p-4 font-bold">AC سلیپر</th>
                <th className="text-right p-4 font-bold">دورانیہ</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((row) => (
                <tr key={row.route} className="border-b even:bg-muted/20 hover:bg-muted/30 transition-colors">
                  <td className="p-4 font-semibold whitespace-nowrap">{row.route}</td>
                  <td className="p-4 text-right text-primary font-semibold">₨{row.economy}</td>
                  <td className="p-4 text-right">₨{row.acStandard}</td>
                  <td className="p-4 text-right">{row.acBusiness === "—" ? "—" : `₨${row.acBusiness}`}</td>
                  <td className="p-4 text-right font-semibold">{row.acSleeper === "—" ? "—" : `₨${row.acSleeper}`}</td>
                  <td className="p-4 text-right text-muted-foreground">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-5">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-black">سفری کلاسز کی وضاحت</h2>
          <p className="text-sm text-muted-foreground mt-2">صحیح کلاس کا انتخاب آپ کے بجٹ اور سفر کے دورانیے پر منحصر ہوتا ہے</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {coachClasses.map((item) => (
            <Card key={item.cls} className={`${item.gradient} border hover-lift h-full`}>
              <CardContent className="p-6 space-y-4">
                <div>
                  <div className="text-lg font-black">{item.cls}</div>
                  <div className="text-sm font-semibold text-primary">{item.fareRange}</div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature) => (
                    <span key={feature} className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">{feature}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-5">
        {discountCards.map((card) => (
          <Card key={card.title} className={`${card.gradient} border hover-lift`}>
            <CardContent className="p-6 space-y-3">
              <card.icon className="w-6 h-6 text-primary" />
              <h3 className="font-black text-lg">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-5">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-black">بکنگ سے پہلے یہ تین کام کریں</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {bookingSteps.map((step) => (
            <Card key={step.title} className="border hover-lift h-full">
              <CardContent className="p-6 space-y-3">
                <step.icon className="w-6 h-6 text-primary" />
                <h3 className="font-black">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
