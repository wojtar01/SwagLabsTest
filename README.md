# SwagLabs E2E Test Automation Framework

[![Playwright Tests](https://github.com/wojtar01/SwagLabsTest/actions/workflows/playwright.yml/badge.svg)](https://github.com/wojtar01/SwagLabsTest/actions/workflows/playwright.yml)
![Playwright](https://img.shields.io/badge/Playwright-1.42+-2EAD33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)

Kompleksowy framework do testów automatycznych End-to-End (E2E) dla aplikacji [Sauce Demo (Swag Labs)](https://www.saucedemo.com/) zrealizowany przy użyciu **Playwright** oraz **TypeScript**.

Projekt został zaprojektowany z zachowaniem dobrych praktyk inżynierii testów oprogramowania, wzorca **Page Object Model (POM)**, nowoczesnych **Custom Fixtures** oraz integracji **CI/CD** za pomocą **GitHub Actions**.

---

## 🚀 Technologie i narzędzia

- **Framework:** [Playwright Test](https://playwright.dev/)
- **Język programowania:** [TypeScript](https://www.typescriptlang.org/)
- **Wzorzec projektowy:** Page Object Model (POM) + Playwright Custom Fixtures
- **CI/CD:** GitHub Actions (automatyczne uruchamianie testów na Chromium, Firefox i WebKit przy każdym `push` i `pull_request`)
- **Raportowanie:** Wbudowany Playwright HTML Reporter z artefaktami i zrzutami śladów (Traces)

---

## 📂 Struktura projektu

```text
├── .github/workflows/       # Konfiguracja pipeline'u CI/CD w GitHub Actions
│   └── playwright.yml
├── fixtures/                # Custom Fixtures wstrzykujące Page Objects do testów
│   └── page.fixture.ts
├── pages/                   # Klasy stron Page Object Model (elementy i akcje)
│   ├── login.page.ts
│   ├── inventory.page.ts
│   ├── cart.page.ts
│   ├── checkoutStepOne.page.ts
│   ├── checkoutStepTwo.page.ts
│   └── checkoutComplete.page.ts
├── test-data/               # Scentralizowane dane testowe i konfiguracja użytkowników
│   └── test.data.ts
├── tests/                   # Zestawy testów automatycznych
│   ├── E2E.spec.ts          # Pełna ścieżka zakupowa (E2E Purchase Flow)
│   └── login.spec.ts        # Testy autentykacji (pozytywne i negatywne)
├── playwright.config.ts     # Globalna konfiguracja Playwright (baseURL, przeglądarki, retries)
├── package.json             # Zależności i zdefiniowane skrypty npm
└── README.md
```

---

## 🧪 Zakres testów

### 1. Test E2E - Pełny proces zakupowy (`tests/E2E.spec.ts`)
- Logowanie poprawnego użytkownika (`standard_user`).
- Wybór i dodanie wielu produktów do koszyka z weryfikacją licznika (`badge`).
- Przejście do koszyka i weryfikacja liczby wybranych produktów.
- Wypełnienie formularza zamówienia danymi klienta (Checkout Step One).
- Weryfikacja podsumowania zamówienia i kalkulacji (Checkout Step Two).
- Potwierdzenie pomyślnego złożenia zamówienia i widoczności komunikatu o wysyłce (Checkout Complete).

### 2. Testy Autentykacji (`tests/login.spec.ts`)
- **Pozytywne:** Pomyślne logowanie poprawnymi danymi i przejście do katalogu produktów.
- **Negatywne (Zablokowany użytkownik):** Logowanie jako `locked_out_user` i weryfikacja komunikatu o blokadzie.
- **Negatywne (Błędne hasło):** Weryfikacja komunikatu *"Username and password do not match"*.
- **Negatywne (Puste pola):** Próba logowania bez danych i asercja na walidację wymaganego pola.

---

## 🛠️ Uruchomienie lokalne

### Wymagania wstępne
- [Node.js](https://nodejs.org/) (wersja 18 lub nowsza)
- Menedżer pakietów `npm`

### 1. Klonowanie repozytorium
```bash
git clone https://github.com/wojtar01/SwagLabsTest.git
cd SwagLabsTest
```

### 2. Instalacja zależności i przeglądarek
```bash
npm install
npx playwright install --with-deps
```

### 3. Uruchamianie testów

| Komenda | Opis |
|---|---|
| `npm test` | Uruchamia wszystkie testy w trybie headless na wszystkich skonfigurowanych przeglądarkach |
| `npm run test:headed` | Uruchamia testy z widocznym oknem przeglądarki |
| `npm run test:ui` | Uruchamia interaktywny interfejs Playwright UI Runner (polecany do debugowania) |
| `npm run report` | Otwiera raport HTML z ostatniego uruchomienia testów |

---

## ⚙️ Dobre praktyki zaimplementowane w projekcie

1. **Separacja asercji i stron:** Zgodnie z oficjalnymi wytycznymi Playwright i wzorca POM, Page Objecty odpowiadają wyłącznie za udostępnianie lokatorów i akcji strony. Wszelkie asercje `expect()` znajdują się w plikach testowych `*.spec.ts`.
2. **Playwright Fixtures:** Wykorzystano `test.extend`, aby automatycznie wstrzykiwać zainicjalizowane strony do testów, eliminując konieczność wielokrotnego wywoływania `new Page(page)` w każdym teście.
3. **Stabilne selektory:** Lokalizowanie elementów oparto o dedykowane atrybuty testowe `data-test`.
4. **Czytelne raporty:** Wieloetapowe scenariusze E2E podzielono na logiczne sekcje za pomocą `test.step()`.
5. **Konfiguracja środowiska:** Zastosowano `baseURL` w `playwright.config.ts`, co pozwala na łatwe przekierowanie testów na inne środowiska testowe.
