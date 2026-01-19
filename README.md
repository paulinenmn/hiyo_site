# 💅 Nail Art Shop - Starter Next.js

Projet starter configuré avec **Next.js 15**, **TypeScript**, **Tailwind CSS** et **Framer Motion**.

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

## 📁 Structure du projet

```
nail-art-shop/
├── app/
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Page d'accueil
│   └── globals.css      # Styles globaux + Tailwind
├── components/
│   └── AnimatedCard.tsx # Composant exemple avec Framer Motion
├── public/              # Assets statiques (images, etc.)
├── tailwind.config.ts   # Configuration Tailwind
├── tsconfig.json        # Configuration TypeScript
└── package.json
```

## 🎨 Technologies incluses

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styles utilitaires
- **Framer Motion** - Animations fluides
- **ESLint** - Linting du code

## 💡 Exemples d'animations Framer Motion

### Animation au chargement
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Contenu
</motion.div>
```

### Animation au hover
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Bouton
</motion.div>
```

### Animation au scroll (avec viewport)
```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  Contenu
</motion.div>
```

## 🎯 Prochaines étapes

1. **Remplacer le design** avec ton Figma
2. **Ajouter des images** dans `/public`
3. **Créer les pages** :
   - `/prestations` - Liste des services
   - `/galerie` - Photos des créations
   - `/contact` - Formulaire de contact
4. **Intégrer un système de réservation** (Calendly, Cal.com, etc.)
5. **Ajouter Stripe** pour les paiements (si nécessaire)

## 📦 Scripts disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm start` - Lancer le build de production
- `npm run lint` - Vérifier le code

## 🎨 Personnalisation Tailwind

Modifie `tailwind.config.ts` pour ajouter tes couleurs personnalisées depuis Figma :

```ts
theme: {
  extend: {
    colors: {
      primary: '#FF1493',  // Rose personnalisé
      secondary: '#9D4EDD', // Violet personnalisé
    },
  },
}
```

## 📝 Notes

- Tous les composants avec animations Framer Motion doivent avoir `"use client"` en haut
- Les images doivent être dans `/public` et utilisées avec le composant `<Image>` de Next.js
- Tailwind est déjà configuré et prêt à l'emploi

Bon développement ! 🚀
