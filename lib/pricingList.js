export const PricingList = {
  PRICING_EN: [
    {
      title: "Essential Hosting & Domain Plan",
      description:
        "Everything your small eCommerce or Smart Page needs — at a fraction of the regular price. Regularly $1,000/year, now $600 — and only $400 if you buy today! Enjoy reliable, AI-optimized hosting with full security and domain renewal included.",
      price: "$400",
      salePrice: "$600",
      oldPrice: "$1,000",
      duration: "year",
      features: [
        "Annual domain renewal included",
        "AI-optimized hosting environment",
        "99.9% uptime guarantee",
        "Automatic SSL and security updates",
      ],
      recommend: true,
      badge: "🔥 Limited-Time Offer",
      display: function () {
        return `
        %c${this.badge}
        \n\n%c${this.title}
        \n%c${this.description}
        \n\n%c${this.oldPrice} %c${this.salePrice} → %c${this.price} Today!
        \n\nFeatures:
        ${this.features.map((f) => "✅ " + f).join("\n")}
        \n\n⚡ Offer valid for a limited time only!
        `;
      },
      style: function () {
        return [
          "color: orange; font-weight: bold;", // badge
          "font-size: 20px; font-weight: bold;", // title
          "color: gray;", // description
          "text-decoration: line-through; color: gray;", // old price
          "color: #f59e0b; font-weight: 600;", // sale price
          "color: #16a34a; font-weight: 700;", // final price
        ];
      },
      show: function () {
        console.log(this.display(), ...this.style());
      },
    },
  ],
};

// Ejecuta esto para ver el resultado con estilo en consola
PricingList.PRICING_EN[0].show();
