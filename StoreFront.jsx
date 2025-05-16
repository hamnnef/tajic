import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function StoreFront() {
  const products = [
    {
      name: "زعفران ممتاز",
      price: "50 سامانی",
      weight: "1 گرم",
      image: "https://via.placeholder.com/300x200?text=زعفران",
    },
    {
      name: "فلفل سیاه آسیاب‌شده",
      price: "20 سامانی",
      weight: "100 گرم",
      image: "https://via.placeholder.com/300x200?text=فلفل+سیاه",
    },
    {
      name: "زیره سیاه",
      price: "18 سامانی",
      weight: "50 گرم",
      image: "https://via.placeholder.com/300x200?text=زیره+سیاه",
    },
    {
      name: "زردچوبه درجه‌یک",
      price: "15 سامانی",
      weight: "100 گرم",
      image: "https://via.placeholder.com/300x200?text=زردچوبه",
    },
  ];

  const phoneNumber = "989123456789"; // شماره موبایل با کد کشور بدون +

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">فروشگاه ادویه‌فروش تاجیک</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <Card key={index} className="rounded-2xl shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <CardContent className="p-4 space-y-2 text-right">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">وزن: {product.weight}</p>
              <p className="text-lg font-bold text-green-700">{product.price}</p>
              <a
                href={`https://wa.me/${phoneNumber}?text=سلام، من می‌خواهم ${product.name} را سفارش دهم.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Phone size={16} /> سفارش در واتساپ
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
