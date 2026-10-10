# 🏨 Hotel Booking Analytics

A beginner-friendly Data Analytics mini-project that explores hotel reservation
trends, occupancy patterns, cancellation rates and room-category assignments
using the publicly available **Hotel Booking Demand** dataset.

---

## 📂 Project Structure

```
hotel_booking_analytics/
├── data/
│   ├── raw/
│   │   └── hotel_bookings.csv          ← original dataset (not committed to Git)
│   └── processed/
│       ├── hotel_bookings_clean.csv    ← cleaned data (not committed to Git)
│       └── cleaning_report.txt
├── db/
│   └── hotel_bookings.db               ← SQLite database (not committed to Git)
├── dashboard/
│   └── app.py                          ← Streamlit + Plotly interactive dashboard
├── docs/
│   ├── dataset_info.md                 ← dataset citation and usage notes
│   └── business_insights_report.md    ← auto-generated business insights report
├── notebooks/
│   ├── 01_exploratory_analysis.ipynb   ← initial data exploration
│   └── 02_eda.ipynb                    ← full EDA notebook
├── outputs/                            ← 23 PNG charts + SQL results text file
├── sql/                                ← 14 SQL query files (business questions)
├── src/
│   ├── data_loader.py                  ← load and inspect raw dataset
│   ├── data_cleaning.py                ← 10-step cleaning pipeline
│   ├── download_dataset.py             ← Kaggle API download helper
│   ├── eda.py                          ← full EDA; saves all charts to outputs/
│   ├── db_setup.py                     ← load cleaned CSV into SQLite
│   ├── run_sql_analysis.py             ← execute all SQL queries + cross-checks
│   ├── kpi_calculator.py               ← 9 reusable KPI functions
│   └── generate_report.py              ← generate docs/business_insights_report.md
├── tests/
│   ├── test_data_cleaning.py           ← 27 tests
│   ├── test_data_loader.py             ← 3 tests
│   ├── test_db_setup.py                ← 24 tests
│   └── test_kpi_calculator.py          ← 44 tests  (95 total, all passing)
├── gitignore.txt                       ← rename to .gitignore (see Setup)
├── requirements.txt
└── README.md
```

---

## 📊 Dataset

| Field | Detail |
|---|---|
| **Name** | Hotel Booking Demand |
| **Authors** | Nuno Antonio, Ana de Almeida, Luis Nunes |
| **Published** | *Data in Brief*, Vol. 22, 2019 |
| **DOI** | https://doi.org/10.1016/j.dib.2018.11.126 |
| **Kaggle mirror** | https://www.kaggle.com/datasets/jessemostipak/hotel-booking-demand |
| **License** | CC0 1.0 — Public Domain (free to use for any purpose) |
| **Rows** | ~119,390 hotel reservations |
| **Columns** | 32 features covering booking dates, guest counts, room types, cancellations, etc. |

### How to download

**Option A — Kaggle CLI (recommended)**
```bash
# 1. Install the Kaggle CLI (already in requirements.txt via pip)
pip install kaggle

# 2. Place your kaggle.json API token in ~/.kaggle/kaggle.json
#    (Download from: https://www.kaggle.com/settings → API → Create New Token)

# 3. Download the dataset
kaggle datasets download -d jessemostipak/hotel-booking-demand \
      -p hotel_booking_analytics/data/raw --unzip
```

**Option B — Manual browser download**
1. Go to https://www.kaggle.com/datasets/jessemostipak/hotel-booking-demand
2. Click **Download** (requires a free Kaggle account).
3. Extract `hotel_bookings.csv` into `hotel_booking_analytics/data/raw/`.

---

## ⚙️ Setup Instructions

```bash
# 1. Navigate to the project folder
cd hotel_booking_analytics

# 2. Create and activate a virtual environment
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Rename the gitignore file
# Windows PowerShell
Rename-Item gitignore.txt .gitignore

# macOS / Linux
mv gitignore.txt .gitignore

# 5. Place hotel_bookings.csv in data/raw/ (see Dataset section above)

# 6. Launch Jupyter Notebook
jupyter notebook
```

---

## 🔍 Analysis Topics

| # | Topic |
|---|---|
| 1 | Booking trends over time (monthly / yearly) |
| 2 | Occupancy rates by hotel type (City vs Resort) |
| 3 | Cancellation rates and factors driving cancellations |
| 4 | Reserved vs assigned room category mismatches |
| 5 | Lead time and its relationship to cancellation |
| 6 | Revenue indicators (ADR — Average Daily Rate) |
| 7 | Guest origin (country-level heatmap) |

---

## 🚀 Running the Project

```bash
# 1. Inspect the raw dataset
python src/data_loader.py

# 2. Clean the dataset  (saves to data/processed/)
python src/data_cleaning.py

# 3. EDA — generate all charts into outputs/
python src/eda.py

# 4. SQL — build the SQLite database
python src/db_setup.py

# 5. SQL — run all queries + cross-checks (saves outputs/sql_analysis_results.txt)
python src/run_sql_analysis.py

# 6. KPIs — compute all metrics and print summary
python src/kpi_calculator.py

# 7. Report — generate docs/business_insights_report.md
python src/generate_report.py

# 8. Streamlit dashboard (opens in your browser)
streamlit run dashboard/app.py

# 9. Jupyter notebooks
jupyter notebook

# 10. Run all tests (95 tests)
python -m pytest tests/ -v
```

## 🖥️ Dashboard

The interactive dashboard (`dashboard/app.py`) is built with Streamlit and Plotly.

**To launch:**
```bash
streamlit run dashboard/app.py
```
Then open http://localhost:8501 in your browser.

**Features:**
- Sidebar filters: hotel type, booking status, year, room category, market segment, lead-time range
- Tab 1 — Overview: KPI cards + status/hotel breakdown
- Tab 2 — Trends: monthly volume, seasonal pattern, yearly totals
- Tab 3 — Cancellations: status donut, hotel comparison, market-segment rates, lead-time violin
- Tab 4 — Rooms & Occupancy: room-type demand, mismatch pie, demand heatmap, stay-duration histogram
- Tab 5 — Customers: segment bar, customer type, repeat guests, special requests, ADR box plot
- Download button for filtered data as CSV

## 🗂️ Source Code Files

| File | Purpose |
|---|---|
| `src/data_loader.py` | Load and inspect the raw dataset |
| `src/data_cleaning.py` | 10-step cleaning pipeline; saves cleaned CSV + report |
| `src/download_dataset.py` | Download dataset via Kaggle API |
| `src/eda.py` | Full EDA — 24 charts saved to `outputs/` |
| `src/db_setup.py` | Load cleaned CSV into SQLite (`db/hotel_bookings.db`) |
| `src/run_sql_analysis.py` | Execute all SQL queries + 15 Pandas cross-checks |
| `src/kpi_calculator.py` | 9 reusable KPI functions with defined denominators |
| `src/generate_report.py` | Generate `docs/business_insights_report.md` |

## 🗃️ SQL Files (`sql/`)

| File | Business Question |
|---|---|
| `01_booking_status_distribution.sql` | Total bookings and status split |
| `02_yearly_booking_trends.sql` | Yearly volume and cancellation rate |
| `02b_monthly_booking_trends.sql` | Monthly volume and cancellation rate |
| `03_cancellation_rates.sql` | Rates by hotel, deposit type, guest type |
| `04_room_category_analysis.sql` | Demand and cancel rate by room type |
| `04b_room_mismatch.sql` | Reserved vs assigned mismatch (overall) |
| `04c_room_mismatch_by_hotel.sql` | Mismatch rate by hotel type |
| `05_lead_time_and_stay_duration.sql` | Avg lead time and nights by hotel/status |
| `06_market_segment_analysis.sql` | Volume, cancellations, ADR by segment |
| `06b_distribution_channel_analysis.sql` | Same metrics by distribution channel |
| `07_customer_type_analysis.sql` | Transient / Group / Contract comparison |
| `08_top_countries.sql` | Top 15 guest origin countries |
| `09_adr_summary.sql` | ADR by hotel and year |
| `10_special_requests_and_parking.sql` | Special requests vs cancellation rate |

## 🧹 Data Cleaning Summary (actual results)

| Metric | Value |
|---|---|
| Raw rows | 119,390 |
| After cleaning | **87,224** |
| Rows removed | 32,166 (26.9%) |
| Missing values after | 0 |
| Duplicate rows after | 0 |

See `docs/dataset_info.md` for the full issue-by-issue breakdown.

---

## 🔀 Git — Upload to GitHub

### First-time setup (run once, inside the `hotel_booking_analytics/` folder)

```powershell
# Windows PowerShell — run from d:\BOBGUPTA\hotel_booking_analytics\

# 1. Rename gitignore.txt to .gitignore
Rename-Item gitignore.txt .gitignore

# 2. Initialise a local Git repository
git init

# 3. Stage all project files (large data/db files are excluded by .gitignore)
git add .

# 4. Review what will be committed (optional but recommended)
git status

# 5. Make the first commit
git commit -m "Initial commit: Hotel Booking Analytics project"

# 6. Add your GitHub remote (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/hotel-booking-analytics.git

# 7. Push to GitHub
git branch -M main
git push -u origin main
```

> **Note:** If Git is not installed, download it from https://git-scm.com/download/win
> then restart PowerShell and re-run the commands above.

### Subsequent commits

```powershell
git add .
git commit -m "Brief description of changes"
git push
```

---

## 🎓 College Presentation Checklist

Use this checklist before submitting or presenting the project.

### ✅ Data & Reproducibility
- [ ] `data/raw/hotel_bookings.csv` is present locally (downloaded from Kaggle)
- [ ] `data/processed/hotel_bookings_clean.csv` exists — run `python src/data_cleaning.py` if not
- [ ] `db/hotel_bookings.db` exists — run `python src/db_setup.py` if not
- [ ] All 23 charts exist in `outputs/` — run `python src/eda.py` if not
- [ ] `docs/business_insights_report.md` exists — run `python src/generate_report.py` if not

### ✅ Code Quality
- [ ] All 95 unit tests pass: `python -m pytest tests/ -v`
- [ ] No hardcoded absolute paths — all paths are relative
- [ ] Requirements are pinned in `requirements.txt`

### ✅ Dashboard
- [ ] Dashboard launches without errors: `streamlit run dashboard/app.py`
- [ ] All 5 tabs load correctly in the browser at http://localhost:8501
- [ ] Sidebar filters change the charts dynamically
- [ ] CSV download button works

### ✅ Documentation
- [ ] `README.md` describes how to set up and run the project
- [ ] `docs/dataset_info.md` includes dataset citation and license
- [ ] `docs/business_insights_report.md` contains written business insights
- [ ] SQL query files in `sql/` are named descriptively

### ✅ GitHub Repository
- [ ] `.gitignore` excludes `venv/`, `data/raw/*.csv`, `data/processed/`, `db/*.db`, `outputs/*.png`
- [ ] Repository is public (or shared with your instructor)
- [ ] `README.md` renders correctly on GitHub

### ✅ Presentation Talking Points
1. **Problem statement** — Why analyse hotel bookings? (revenue, operations, customer behaviour)
2. **Dataset** — 119,390 real reservations, CC0 licence, peer-reviewed paper
3. **Data cleaning** — 32,166 rows removed; zero nulls and duplicates after cleaning
4. **Key findings** — Quote 2–3 specific numbers from `docs/business_insights_report.md`
5. **SQL analysis** — Show one SQL query and its result
6. **Dashboard demo** — Live demo of the Streamlit app
7. **Limitations** — Anonymised country data, no actual revenue figures, training data only

---

## 📜 License

This project is for educational purposes.
The dataset is released under **CC0 1.0 Universal (Public Domain)**.
See `docs/dataset_info.md` for full citation and usage details.
