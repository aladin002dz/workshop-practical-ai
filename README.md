# Practical AI: Build Your Personal Website
# الذكاء الاصطناعي العملي: بناء موقعك الشخصي

Diapositives interactives de l'atelier **الذكاء الاصطناعي العملي · النادي الإعلامي تمكين الشلف** (Tamkeen Club for Media Skills · Chlef), animé par Mahfoudh Arous au مركب التسلية العلمية الشهيد الغلام محمد.

Le contenu a été structuré selon les 4 étapes pratiques : **التخطيط (Plan) → التصميم (Design) → البناء (Build) → النشر (Publish)**.

- **Sur ordinateur** : flèches `←` `→` du clavier (ou les boutons de navigation).
- **Sur mobile** : glisser le doigt à gauche/droite (swipe) sur l'écran.
- **3 langues** : العربية (`/`, mise en page RTL, langue par défaut), English (`/en`), Français (`/fr`).
- **Responsive** : de la taille smartphone au grand écran de projection d'amphithéâtre.
- **Thème clair / sombre** : suit le réglage du système par défaut ; le bouton soleil/lune force un thème (mémorisé dans `localStorage`, appliqué avant le premier rendu sans flash).
- **Niveaux** : les diapositives marquées « Débutant » / « Avancé » (champ `level` dans `lib/content/types.ts`) ciblent un public mixte.

## Couleurs et contraste

Les couleurs sont des variables CSS définies dans `app/globals.css`, avec une valeur claire et une valeur sombre pour chacune. Chaque étape a sa couleur d'accent, choisie selon sa position dans la présentation (`lib/accent.ts`, attribut `data-accent`) : brand (violet), plan (bleu), design (magenta), build (ambre), publish (vert). Les cinq teintes partagent la même luminosité et la même saturation OKLCH. Tous les textes respectent le niveau WCAG AA (≥ 4,5:1) dans les deux thèmes. Pour modifier une couleur, mettez à jour les deux thèmes et revérifiez le contraste.

## Stack technique

Même stack que [aladin002dz.github.io](https://github.com/aladin002dz/aladin002dz.github.io) :

- [Next.js](https://nextjs.org) (App Router, export statique) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- Contenu multilingue structuré par dictionnaires (`lib/content/{fr,en,ar}.ts`), sur le même principe que les `dictionaries/` du site de référence
- Déploiement automatique sur **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`)

## Développement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build / export statique

```bash
npm run build
```

Génère le site statique dans `out/`. Le préfixe d'URL GitHub Pages (`basePath`) n'est appliqué que lorsque la variable d'environnement `GITHUB_PAGES=true` est définie (voir `next.config.ts`), ce qui est fait automatiquement par le workflow de déploiement.

## Structure du contenu

Chaque langue est un fichier de données (`lib/content/fr.ts`, `en.ts`, `ar.ts`) respectant le même schéma (`lib/content/types.ts`) : diapositive de titre, diapositives de séparation de bloc, diapositives de contenu (listes à puces/numérotées, citations) et diapositive de clôture. Pour modifier un texte, il suffit d'éditer la diapositive correspondante dans le fichier de la langue concernée — l'ordre et le nombre de diapositives doivent rester identiques entre les trois langues.

## Ajouter une langue

1. Créer `lib/content/<code>.ts` en copiant `en.ts` et en traduisant.
2. L'enregistrer dans `lib/content/index.ts` (`decks`, `locales`).
3. Créer un nouveau groupe de routes `app/(<code>)/<code>/page.tsx` (copier
   `app/(en)/en/page.tsx`), avec son propre `app/(<code>)/layout.tsx`
   (copier `app/(en)/layout.tsx`, en ajustant `locale`/`dir`) — chaque
   langue a son propre root layout pour que `lang`/`dir` soient corrects
   dans le HTML statique dès le premier octet (voir `components/RootDocument.tsx`).
4. Ajouter `<code>` dans `LOCALE_PATH` (`lib/site.ts`) et dans
   `LOCALE_HREF` (`components/Slideshow.tsx`).
