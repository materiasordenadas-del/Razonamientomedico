// HCR Drug Bank — Alto rendimiento v1
// Formato compatible con el motor actual: group -> children -> drugs.
// Campos opcionales por fármaco: canonicalId, aliases, presentations, routes, frequencies, duration.
// No es una guía de prescripción; las dosis deben ajustarse al caso, peso, edad, función renal/hepática y guías locales.

window.HCR_DRUGS = [
  {
    group: "Cardiovasculares",
    children: [
      {
        group: "Antihipertensivos",
        children: [
          {
            group: "Betabloqueantes",
            children: [
              {
                group: "β1 selectivos",
                drugs: [
                  { id: "atenolol", canonicalId: "atenolol", name: "Atenolol", aliases: ["beta bloqueante beta 1"] },
                  { id: "bisoprolol", canonicalId: "bisoprolol", name: "Bisoprolol", aliases: ["beta bloqueante beta 1"] },
                  { id: "metoprolol", canonicalId: "metoprolol", name: "Metoprolol", aliases: ["metoprolol tartrato", "metoprolol succinato"] },
                  { id: "esmolol", canonicalId: "esmolol", name: "Esmolol", doses: ["Bolo IV", "Infusión IV", "Otra dosis"], presentations: ["Bolo IV", "Infusión IV", "Otra dosis"], routes: ["IV"], frequencies: ["Bolo", "Infusión titulada", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true },
                  { id: "nebivolol", canonicalId: "nebivolol", name: "Nebivolol" }
                ]
              },
              {
                group: "No selectivos",
                drugs: [
                  { id: "propranolol", canonicalId: "propranolol", name: "Propranolol" },
                  { id: "nadolol", canonicalId: "nadolol", name: "Nadolol" },
                  { id: "timolol", canonicalId: "timolol", name: "Timolol" }
                ]
              },
              {
                group: "Mixtos α1 + β",
                drugs: [
                  { id: "carvedilol", canonicalId: "carvedilol", name: "Carvedilol" },
                  { id: "labetalol", canonicalId: "labetalol", name: "Labetalol", doses: ["20 mg", "40 mg", "80 mg", "Otra dosis"], presentations: ["20 mg", "40 mg", "80 mg", "Otra dosis"], routes: ["IV", "VO"], frequencies: ["Bolo IV", "Cada 10 minutos según respuesta", "Cada 12 horas", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true }
                ]
              }
            ]
          },
          {
            group: "Bloqueadores de canales de calcio",
            children: [
              {
                group: "Dihidropiridínicos",
                drugs: [
                  { id: "amlodipine", canonicalId: "amlodipine", name: "Amlodipino" },
                  { id: "nifedipine", canonicalId: "nifedipine", name: "Nifedipino" },
                  { id: "felodipine", canonicalId: "felodipine", name: "Felodipino" },
                  { id: "nicardipine", canonicalId: "nicardipine", name: "Nicardipino", doses: ["Infusión IV", "Otra dosis"], presentations: ["Infusión IV", "Otra dosis"], routes: ["IV"], frequencies: ["Infusión titulada", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true },
                  { id: "clevidipine", canonicalId: "clevidipine", name: "Clevidipino", doses: ["Infusión IV", "Otra dosis"], presentations: ["Infusión IV", "Otra dosis"], routes: ["IV"], frequencies: ["Infusión titulada", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true },
                  { id: "lercanidipine", canonicalId: "lercanidipine", name: "Lercanidipino" }
                ]
              },
              {
                group: "No dihidropiridínicos",
                drugs: [
                  { id: "verapamil", canonicalId: "verapamil", name: "Verapamilo" },
                  { id: "diltiazem", canonicalId: "diltiazem", name: "Diltiazem", doses: ["Bolo IV", "Infusión IV", "VO", "Otra dosis"], presentations: ["Bolo IV", "Infusión IV", "VO", "Otra dosis"], routes: ["IV", "VO"], frequencies: ["Bolo", "Infusión titulada", "Cada 6-8 horas", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true }
                ]
              }
            ]
          },
          {
            group: "IECA",
            drugs: [
              { id: "captopril", canonicalId: "captopril", name: "Captopril" },
              { id: "enalapril", canonicalId: "enalapril", name: "Enalapril" },
              { id: "enalaprilat", canonicalId: "enalaprilat", name: "Enalaprilato", doses: ["IV", "Otra dosis"], presentations: ["IV", "Otra dosis"], routes: ["IV"], frequencies: ["Cada 6 horas", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true },
              { id: "lisinopril", canonicalId: "lisinopril", name: "Lisinopril" },
              { id: "ramipril", canonicalId: "ramipril", name: "Ramipril" },
              { id: "perindopril", canonicalId: "perindopril", name: "Perindopril" }
            ]
          },
          {
            group: "BRA",
            drugs: [
              { id: "losartan", canonicalId: "losartan", name: "Losartán" },
              { id: "valsartan", canonicalId: "valsartan", name: "Valsartán" },
              { id: "candesartan", canonicalId: "candesartan", name: "Candesartán" },
              { id: "olmesartan", canonicalId: "olmesartan", name: "Olmesartán" },
              { id: "telmisartan", canonicalId: "telmisartan", name: "Telmisartán" }
            ]
          },
          { group: "ARNI", drugs: [{ id: "sacubitril_valsartan", canonicalId: "sacubitril_valsartan", name: "Sacubitrilo/Valsartán", aliases: ["ARNI"] }] },
          { group: "Inhibidor directo de renina", drugs: [{ id: "aliskiren", canonicalId: "aliskiren", name: "Aliskireno" }] },
          {
            group: "Diuréticos antihipertensivos",
            drugs: [
              { id: "hydrochlorothiazide", canonicalId: "hydrochlorothiazide", name: "Hidroclorotiazida" },
              { id: "chlorthalidone", canonicalId: "chlorthalidone", name: "Clortalidona" },
              { id: "indapamide", canonicalId: "indapamide", name: "Indapamida" }
            ]
          },
          {
            group: "Antagonistas mineralocorticoides",
            drugs: [
              { id: "spironolactone", canonicalId: "spironolactone", name: "Espironolactona" },
              { id: "eplerenone", canonicalId: "eplerenone", name: "Eplerenona" }
            ]
          },
          {
            group: "Vasodilatadores directos",
            drugs: [
              { id: "hydralazine", canonicalId: "hydralazine", name: "Hidralazina" },
              { id: "minoxidil", canonicalId: "minoxidil", name: "Minoxidil" }
            ]
          },
          {
            group: "Vasodilatadores dependientes de óxido nítrico",
            drugs: [
              { id: "nitroglycerin", canonicalId: "nitroglycerin", name: "Nitroglicerina", doses: ["Infusión IV", "Sublingual", "Otra dosis"], presentations: ["Infusión IV", "Sublingual", "Otra dosis"], routes: ["IV", "SL"], frequencies: ["Infusión titulada", "Cada 5 minutos según respuesta", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true },
              { id: "nitroprusside", canonicalId: "nitroprusside", name: "Nitroprusiato", doses: ["Infusión IV", "Otra dosis"], presentations: ["Infusión IV", "Otra dosis"], routes: ["IV"], frequencies: ["Infusión titulada", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true }
            ]
          },
          {
            group: "Bloqueadores α1",
            drugs: [
              { id: "prazosin", canonicalId: "prazosin", name: "Prazosina" },
              { id: "doxazosin", canonicalId: "doxazosin", name: "Doxazosina" },
              { id: "terazosin", canonicalId: "terazosin", name: "Terazosina" }
            ]
          },
          {
            group: "Simpaticolíticos centrales",
            drugs: [
              { id: "clonidine", canonicalId: "clonidine", name: "Clonidina" },
              { id: "methyldopa", canonicalId: "methyldopa", name: "Metildopa" }
            ]
          }
        ]
      },
      {
        group: "Insuficiencia cardiaca y diuréticos",
        children: [
          { group: "Diuréticos de asa", drugs: [
            { id: "furosemide", canonicalId: "furosemide", name: "Furosemida", doses: ["20 mg", "40 mg", "80 mg", "Otra dosis"], presentations: ["20 mg", "40 mg", "80 mg", "Otra dosis"], routes: ["IV", "VO"], frequencies: ["Dosis única", "Cada 12 horas", "Cada 24 horas", "Infusión continua", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true },
            { id: "bumetanide", canonicalId: "bumetanide", name: "Bumetanida" },
            { id: "torsemide", canonicalId: "torsemide", name: "Torsemida" }
          ] },
          { group: "iSGLT2", drugs: [
            { id: "dapagliflozin", canonicalId: "dapagliflozin", name: "Dapagliflozina" },
            { id: "empagliflozin", canonicalId: "empagliflozin", name: "Empagliflozina" }
          ] },
          { group: "Vasodilatadores en IC", drugs: [
            { id: "hydralazine_isosorbide", canonicalId: "hydralazine_isosorbide", name: "Hidralazina + dinitrato de isosorbida" },
            { id: "isosorbide_dinitrate", canonicalId: "isosorbide_dinitrate", name: "Dinitrato de isosorbida" },
            { id: "isosorbide_mononitrate", canonicalId: "isosorbide_mononitrate", name: "Mononitrato de isosorbida" }
          ] },
          { group: "Otros", drugs: [
            { id: "digoxin", canonicalId: "digoxin", name: "Digoxina" },
            { id: "ivabradine", canonicalId: "ivabradine", name: "Ivabradina" }
          ] }
        ]
      },
      {
        group: "Antiarrítmicos",
        children: [
          { group: "Clase IA", drugs: [{ id: "procainamide", canonicalId: "procainamide", name: "Procainamida" }, { id: "quinidine", canonicalId: "quinidine", name: "Quinidina" }] },
          { group: "Clase IB", drugs: [{ id: "lidocaine", canonicalId: "lidocaine", name: "Lidocaína" }, { id: "mexiletine", canonicalId: "mexiletine", name: "Mexiletina" }] },
          { group: "Clase IC", drugs: [{ id: "flecainide", canonicalId: "flecainide", name: "Flecainida" }, { id: "propafenone", canonicalId: "propafenone", name: "Propafenona" }] },
          { group: "Clase III", drugs: [
            { id: "amiodarone", canonicalId: "amiodarone", name: "Amiodarona", doses: ["150 mg", "300 mg", "Infusión IV", "Otra dosis"], presentations: ["150 mg", "300 mg", "Infusión IV", "Otra dosis"], routes: ["IV", "VO"], frequencies: ["Bolo", "Infusión", "Cada 24 horas", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true },
            { id: "sotalol", canonicalId: "sotalol", name: "Sotalol" },
            { id: "dofetilide", canonicalId: "dofetilide", name: "Dofetilida" },
            { id: "ibutilide", canonicalId: "ibutilide", name: "Ibutilida" }
          ] },
          { group: "Clase IV / nodo AV", drugs: [
            { id: "adenosine", canonicalId: "adenosine", name: "Adenosina", doses: ["6 mg", "12 mg", "Otra dosis"], presentations: ["6 mg", "12 mg", "Otra dosis"], routes: ["IV"], frequencies: ["Dosis rápida", "Otra frecuencia"], duration: false, allowCustom: true },
            { id: "atropine", canonicalId: "atropine", name: "Atropina", doses: ["0,5 mg", "1 mg", "Otra dosis"], presentations: ["0,5 mg", "1 mg", "Otra dosis"], routes: ["IV"], frequencies: ["Cada 3-5 minutos según respuesta", "Otra frecuencia"], duration: false, allowCustom: true }
          ] }
        ]
      },
      {
        group: "Antianginosos",
        drugs: [
          { id: "nitroglycerin_sca", canonicalId: "nitroglycerin", name: "Nitroglicerina" },
          { id: "isosorbide_dinitrate_angina", canonicalId: "isosorbide_dinitrate", name: "Dinitrato de isosorbida" },
          { id: "ranolazine", canonicalId: "ranolazine", name: "Ranolazina" }
        ]
      },
      {
        group: "Inotrópicos y vasopresores",
        drugs: [
          { id: "norepinephrine", canonicalId: "norepinephrine", name: "Noradrenalina", doses: ["Infusión IV", "Otra dosis"], presentations: ["Infusión IV", "Otra dosis"], routes: ["IV"], frequencies: ["Infusión titulada", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true },
          { id: "epinephrine", canonicalId: "epinephrine", name: "Adrenalina" },
          { id: "dopamine", canonicalId: "dopamine", name: "Dopamina" },
          { id: "dobutamine", canonicalId: "dobutamine", name: "Dobutamina", doses: ["Infusión IV", "Otra dosis"], presentations: ["Infusión IV", "Otra dosis"], routes: ["IV"], frequencies: ["Infusión titulada", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true },
          { id: "milrinone", canonicalId: "milrinone", name: "Milrinona" },
          { id: "vasopressin", canonicalId: "vasopressin", name: "Vasopresina" }
        ]
      },
      {
        group: "Hipolipemiantes",
        children: [
          { group: "Estatinas", drugs: [
            { id: "atorvastatin", canonicalId: "atorvastatin", name: "Atorvastatina", doses: ["40 mg", "80 mg", "Otra dosis"], presentations: ["40 mg", "80 mg", "Otra dosis"], routes: ["VO"], frequencies: ["Cada 24 horas", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true },
            { id: "rosuvastatin", canonicalId: "rosuvastatin", name: "Rosuvastatina" },
            { id: "simvastatin", canonicalId: "simvastatin", name: "Simvastatina" },
            { id: "pravastatin", canonicalId: "pravastatin", name: "Pravastatina" }
          ] },
          { group: "No estatinas", drugs: [
            { id: "ezetimibe", canonicalId: "ezetimibe", name: "Ezetimiba" },
            { id: "fenofibrate", canonicalId: "fenofibrate", name: "Fenofibrato" },
            { id: "gemfibrozil", canonicalId: "gemfibrozil", name: "Gemfibrozilo" }
          ] }
        ]
      }
    ]
  },
  {
    group: "Antimicrobianos",
    children: [
      {
        group: "Antibacterianos",
        children: [
          { group: "Penicilinas", drugs: [
            { id: "penicillin_g", canonicalId: "penicillin_g", name: "Penicilina G" },
            { id: "ampicillin", canonicalId: "ampicillin", name: "Ampicilina" },
            { id: "amoxicillin", canonicalId: "amoxicillin", name: "Amoxicilina" },
            { id: "amoxicillin_clavulanate", canonicalId: "amoxicillin_clavulanate", name: "Amoxicilina/Clavulanato" },
            { id: "piperacillin_tazobactam", canonicalId: "piperacillin_tazobactam", name: "Piperacilina/Tazobactam" },
            { id: "oxacillin", canonicalId: "oxacillin", name: "Oxacilina" }
          ] },
          { group: "Cefalosporinas", children: [
            { group: "1ª generación", drugs: [{ id: "cefazolin", canonicalId: "cefazolin", name: "Cefazolina" }, { id: "cephalexin", canonicalId: "cephalexin", name: "Cefalexina" }] },
            { group: "2ª generación", drugs: [{ id: "cefuroxime", canonicalId: "cefuroxime", name: "Cefuroxima" }, { id: "cefoxitin", canonicalId: "cefoxitin", name: "Cefoxitina" }] },
            { group: "3ª generación", drugs: [
              { id: "ceftriaxone", canonicalId: "ceftriaxone", name: "Ceftriaxona", doses: ["1 g", "2 g", "Otra dosis"], presentations: ["1 g", "2 g", "Otra dosis"], routes: ["IV", "IM"], frequencies: ["Cada 12 horas", "Cada 24 horas", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true },
              { id: "cefotaxime", canonicalId: "cefotaxime", name: "Cefotaxima" },
              { id: "ceftazidime", canonicalId: "ceftazidime", name: "Ceftazidima" }
            ] },
            { group: "4ª generación", drugs: [{ id: "cefepime", canonicalId: "cefepime", name: "Cefepime" }] },
            { group: "5ª generación", drugs: [{ id: "ceftaroline", canonicalId: "ceftaroline", name: "Ceftarolina" }] }
          ] },
          { group: "Carbapenémicos", drugs: [
            { id: "meropenem", canonicalId: "meropenem", name: "Meropenem", doses: ["1 g", "2 g", "Otra dosis"], presentations: ["1 g", "2 g", "Otra dosis"], routes: ["IV"], frequencies: ["Cada 8 horas", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true },
            { id: "imipenem_cilastatin", canonicalId: "imipenem_cilastatin", name: "Imipenem/Cilastatina" },
            { id: "ertapenem", canonicalId: "ertapenem", name: "Ertapenem" }
          ] },
          { group: "Glucopéptidos", drugs: [
            { id: "vancomycin", canonicalId: "vancomycin", name: "Vancomicina", doses: ["500 mg", "1 g", "Otra dosis"], presentations: ["500 mg", "1 g", "Otra dosis"], routes: ["IV", "VO"], frequencies: ["Cada 8 horas", "Cada 12 horas", "Según niveles", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true }
          ] },
          { group: "Macrólidos", drugs: [{ id: "azithromycin", canonicalId: "azithromycin", name: "Azitromicina" }, { id: "clarithromycin", canonicalId: "clarithromycin", name: "Claritromicina" }] },
          { group: "Tetraciclinas", drugs: [{ id: "doxycycline", canonicalId: "doxycycline", name: "Doxiciclina" }, { id: "minocycline", canonicalId: "minocycline", name: "Minociclina" }] },
          { group: "Aminoglucósidos", drugs: [{ id: "gentamicin", canonicalId: "gentamicin", name: "Gentamicina" }, { id: "amikacin", canonicalId: "amikacin", name: "Amikacina" }] },
          { group: "Fluoroquinolonas", drugs: [{ id: "ciprofloxacin", canonicalId: "ciprofloxacin", name: "Ciprofloxacina" }, { id: "levofloxacin", canonicalId: "levofloxacin", name: "Levofloxacina" }, { id: "moxifloxacin", canonicalId: "moxifloxacin", name: "Moxifloxacina" }] },
          { group: "Nitroimidazoles", drugs: [{ id: "metronidazole", canonicalId: "metronidazole", name: "Metronidazol" }] },
          { group: "Sulfonamidas", drugs: [{ id: "tmp_smx", canonicalId: "tmp_smx", name: "Trimetoprim/Sulfametoxazol", aliases: ["TMP-SMX", "Cotrimoxazol"] }] },
          { group: "Oxazolidinonas", drugs: [{ id: "linezolid", canonicalId: "linezolid", name: "Linezolid" }] },
          { group: "Lincosamidas", drugs: [{ id: "clindamycin", canonicalId: "clindamycin", name: "Clindamicina" }] }
        ]
      },
      {
        group: "Antivirales",
        drugs: [
          { id: "acyclovir", canonicalId: "acyclovir", name: "Aciclovir", doses: ["IV", "VO", "Otra dosis"], presentations: ["IV", "VO", "Otra dosis"], routes: ["IV", "VO"], frequencies: ["Cada 8 horas", "Cada 12 horas", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true },
          { id: "valacyclovir", canonicalId: "valacyclovir", name: "Valaciclovir" },
          { id: "ganciclovir", canonicalId: "ganciclovir", name: "Ganciclovir" },
          { id: "oseltamivir", canonicalId: "oseltamivir", name: "Oseltamivir" }
        ]
      },
      {
        group: "Antifúngicos",
        drugs: [
          { id: "fluconazole", canonicalId: "fluconazole", name: "Fluconazol" },
          { id: "amphotericin_b", canonicalId: "amphotericin_b", name: "Anfotericina B" },
          { id: "voriconazole", canonicalId: "voriconazole", name: "Voriconazol" },
          { id: "caspofungin", canonicalId: "caspofungin", name: "Caspofungina" },
          { id: "itraconazole", canonicalId: "itraconazole", name: "Itraconazol" }
        ]
      },
      {
        group: "Antituberculosos",
        drugs: [
          { id: "isoniazid", canonicalId: "isoniazid", name: "Isoniazida" },
          { id: "rifampicin", canonicalId: "rifampicin", name: "Rifampicina" },
          { id: "pyrazinamide", canonicalId: "pyrazinamide", name: "Pirazinamida" },
          { id: "ethambutol", canonicalId: "ethambutol", name: "Etambutol" }
        ]
      },
      {
        group: "Antiparasitarios",
        drugs: [
          { id: "albendazole", canonicalId: "albendazole", name: "Albendazol" },
          { id: "ivermectin", canonicalId: "ivermectin", name: "Ivermectina" },
          { id: "chloroquine", canonicalId: "chloroquine", name: "Cloroquina" },
          { id: "artemether_lumefantrine", canonicalId: "artemether_lumefantrine", name: "Arteméter/Lumefantrina" },
          { id: "primaquine", canonicalId: "primaquine", name: "Primaquina" }
        ]
      }
    ]
  },
  {
    group: "Respiratorio",
    children: [
      { group: "Broncodilatadores β2", drugs: [{ id: "salbutamol", canonicalId: "salbutamol", name: "Salbutamol" }, { id: "formoterol", canonicalId: "formoterol", name: "Formoterol" }, { id: "salmeterol", canonicalId: "salmeterol", name: "Salmeterol" }] },
      { group: "Antimuscarínicos inhalados", drugs: [{ id: "ipratropium", canonicalId: "ipratropium", name: "Ipratropio" }, { id: "tiotropium", canonicalId: "tiotropium", name: "Tiotropio" }] },
      { group: "Corticoides inhalados", drugs: [{ id: "budesonide", canonicalId: "budesonide", name: "Budesonida" }, { id: "fluticasone", canonicalId: "fluticasone", name: "Fluticasona" }] },
      { group: "Corticoides sistémicos", drugs: [{ id: "prednisone", canonicalId: "prednisone", name: "Prednisona" }, { id: "methylprednisolone", canonicalId: "methylprednisolone", name: "Metilprednisolona" }, { id: "hydrocortisone", canonicalId: "hydrocortisone", name: "Hidrocortisona" }] }
    ]
  },
  {
    group: "Endocrino y metabolismo",
    children: [
      { group: "Insulinas", drugs: [
        { id: "regular_insulin", canonicalId: "regular_insulin", name: "Insulina regular", doses: ["SC", "Infusión IV", "Otra dosis"], presentations: ["SC", "Infusión IV", "Otra dosis"], routes: ["SC", "IV"], frequencies: ["Según esquema", "Infusión", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true },
        { id: "nph_insulin", canonicalId: "nph_insulin", name: "Insulina NPH" },
        { id: "glargine", canonicalId: "glargine", name: "Insulina glargina" },
        { id: "lispro", canonicalId: "lispro", name: "Insulina lispro" }
      ] },
      { group: "Antidiabéticos no insulina", drugs: [
        { id: "metformin", canonicalId: "metformin", name: "Metformina" },
        { id: "glibenclamide", canonicalId: "glibenclamide", name: "Glibenclamida" },
        { id: "sitagliptin", canonicalId: "sitagliptin", name: "Sitagliptina" },
        { id: "semaglutide", canonicalId: "semaglutide", name: "Semaglutida" }
      ] },
      { group: "Tiroides", drugs: [
        { id: "levothyroxine", canonicalId: "levothyroxine", name: "Levotiroxina" },
        { id: "methimazole", canonicalId: "methimazole", name: "Metimazol" },
        { id: "propylthiouracil", canonicalId: "propylthiouracil", name: "Propiltiouracilo" }
      ] },
      { group: "Corticoides sistémicos", drugs: [
        { id: "dexamethasone", canonicalId: "dexamethasone", name: "Dexametasona" },
        { id: "hydrocortisone_endocrine", canonicalId: "hydrocortisone", name: "Hidrocortisona" }
      ] }
    ]
  },
  {
    group: "Gastrointestinal",
    children: [
      { group: "Inhibidores de bomba de protones", drugs: [{ id: "omeprazole", canonicalId: "omeprazole", name: "Omeprazol" }, { id: "pantoprazole", canonicalId: "pantoprazole", name: "Pantoprazol" }] },
      { group: "Antieméticos", drugs: [{ id: "ondansetron", canonicalId: "ondansetron", name: "Ondansetrón" }, { id: "metoclopramide", canonicalId: "metoclopramide", name: "Metoclopramida" }, { id: "prochlorperazine", canonicalId: "prochlorperazine", name: "Proclorperazina" }] },
      { group: "Laxantes", drugs: [{ id: "lactulose", canonicalId: "lactulose", name: "Lactulosa" }, { id: "polyethylene_glycol", canonicalId: "polyethylene_glycol", name: "Polietilenglicol" }] },
      { group: "Antidiarreicos", drugs: [{ id: "loperamide", canonicalId: "loperamide", name: "Loperamida" }, { id: "oral_rehydration_solution", canonicalId: "oral_rehydration_solution", name: "Sales de rehidratación oral" }] }
    ]
  },
  {
    group: "Neurología y psiquiatría",
    children: [
      { group: "Anticonvulsivantes", drugs: [
        { id: "levetiracetam", canonicalId: "levetiracetam", name: "Levetiracetam" },
        { id: "phenytoin", canonicalId: "phenytoin", name: "Fenitoína" },
        { id: "valproate", canonicalId: "valproate", name: "Ácido valproico" },
        { id: "carbamazepine", canonicalId: "carbamazepine", name: "Carbamazepina" }
      ] },
      { group: "Benzodiacepinas", drugs: [{ id: "diazepam", canonicalId: "diazepam", name: "Diazepam" }, { id: "lorazepam", canonicalId: "lorazepam", name: "Lorazepam" }, { id: "midazolam", canonicalId: "midazolam", name: "Midazolam" }] },
      { group: "Antipsicóticos", drugs: [{ id: "haloperidol", canonicalId: "haloperidol", name: "Haloperidol" }, { id: "quetiapine", canonicalId: "quetiapine", name: "Quetiapina" }] },
      { group: "Antidepresivos", drugs: [{ id: "sertraline", canonicalId: "sertraline", name: "Sertralina" }, { id: "fluoxetine", canonicalId: "fluoxetine", name: "Fluoxetina" }, { id: "amitriptyline", canonicalId: "amitriptyline", name: "Amitriptilina" }] }
    ]
  },
  {
    group: "Analgesia y antiinflamatorios",
    children: [
      { group: "Analgésicos no opioides", drugs: [{ id: "acetaminophen", canonicalId: "acetaminophen", name: "Acetaminofén / Paracetamol" }, { id: "dipyrone", canonicalId: "dipyrone", name: "Dipirona / Metamizol" }] },
      { group: "AINE", drugs: [{ id: "ibuprofen", canonicalId: "ibuprofen", name: "Ibuprofeno" }, { id: "naproxen", canonicalId: "naproxen", name: "Naproxeno" }, { id: "diclofenac", canonicalId: "diclofenac", name: "Diclofenaco" }, { id: "ketorolac", canonicalId: "ketorolac", name: "Ketorolaco" }] },
      { group: "Opioides", drugs: [{ id: "morphine", canonicalId: "morphine", name: "Morfina" }, { id: "fentanyl", canonicalId: "fentanyl", name: "Fentanilo" }, { id: "tramadol", canonicalId: "tramadol", name: "Tramadol" }] },
      { group: "Anestésicos locales", drugs: [{ id: "lidocaine_local", canonicalId: "lidocaine", name: "Lidocaína" }, { id: "bupivacaine", canonicalId: "bupivacaine", name: "Bupivacaína" }] }
    ]
  },
  {
    group: "Anticoagulantes y antiagregantes",
    children: [
      { group: "Antiagregantes", drugs: [
        { id: "aspirin", canonicalId: "aspirin", name: "Aspirina", doses: ["81 mg", "100 mg", "300 mg", "Otra dosis"], presentations: ["81 mg", "100 mg", "300 mg", "Otra dosis"], routes: ["VO"], frequencies: ["Dosis de carga", "Cada 24 horas", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true },
        { id: "clopidogrel", canonicalId: "clopidogrel", name: "Clopidogrel" },
        { id: "ticagrelor", canonicalId: "ticagrelor", name: "Ticagrelor" },
        { id: "prasugrel", canonicalId: "prasugrel", name: "Prasugrel" }
      ] },
      { group: "Anticoagulantes parenterales", drugs: [
        { id: "unfractionated_heparin", canonicalId: "unfractionated_heparin", name: "Heparina no fraccionada" },
        { id: "enoxaparin", canonicalId: "enoxaparin", name: "Enoxaparina", doses: ["40 mg", "60 mg", "80 mg", "1 mg/kg", "Otra dosis"], presentations: ["40 mg", "60 mg", "80 mg", "1 mg/kg", "Otra dosis"], routes: ["SC"], frequencies: ["Cada 12 horas", "Cada 24 horas", "Otra frecuencia"], durations: ["Otra duración"], duration: true, allowCustom: true }
      ] },
      { group: "Anticoagulantes orales", drugs: [
        { id: "warfarin", canonicalId: "warfarin", name: "Warfarina" },
        { id: "rivaroxaban", canonicalId: "rivaroxaban", name: "Rivaroxabán" },
        { id: "apixaban", canonicalId: "apixaban", name: "Apixabán" },
        { id: "dabigatran", canonicalId: "dabigatran", name: "Dabigatrán" }
      ] },
      { group: "Trombolíticos", drugs: [
        { id: "alteplase", canonicalId: "alteplase", name: "Alteplasa" },
        { id: "tenecteplase", canonicalId: "tenecteplase", name: "Tenecteplasa" }
      ] }
    ]
  },
  {
    group: "Renal, líquidos y electrolitos",
    children: [
      { group: "Cristaloides", drugs: [{ id: "normal_saline", canonicalId: "normal_saline", name: "Solución salina 0,9%" }, { id: "lactated_ringer", canonicalId: "lactated_ringer", name: "Ringer lactato" }, { id: "dextrose_5", canonicalId: "dextrose_5", name: "Dextrosa 5%" }] },
      { group: "Electrolitos", drugs: [{ id: "potassium_chloride", canonicalId: "potassium_chloride", name: "Cloruro de potasio" }, { id: "magnesium_sulfate", canonicalId: "magnesium_sulfate", name: "Sulfato de magnesio" }, { id: "calcium_gluconate", canonicalId: "calcium_gluconate", name: "Gluconato de calcio" }, { id: "sodium_bicarbonate", canonicalId: "sodium_bicarbonate", name: "Bicarbonato de sodio" }] },
      { group: "Quelantes y resinas", drugs: [{ id: "sodium_polystyrene", canonicalId: "sodium_polystyrene", name: "Poliestirensulfonato sódico" }, { id: "sevelamer", canonicalId: "sevelamer", name: "Sevelamer" }] }
    ]
  },
  {
    group: "Urgencias, toxicología y antídotos",
    children: [
      { group: "Antídotos", drugs: [
        { id: "naloxone", canonicalId: "naloxone", name: "Naloxona" },
        { id: "flumazenil", canonicalId: "flumazenil", name: "Flumazenil" },
        { id: "n_acetylcysteine", canonicalId: "n_acetylcysteine", name: "N-acetilcisteína" },
        { id: "activated_charcoal", canonicalId: "activated_charcoal", name: "Carbón activado" },
        { id: "atropine_toxicology", canonicalId: "atropine", name: "Atropina" }
      ] },
      { group: "Reanimación", drugs: [
        { id: "epinephrine_resuscitation", canonicalId: "epinephrine", name: "Adrenalina" },
        { id: "amiodarone_resuscitation", canonicalId: "amiodarone", name: "Amiodarona" },
        { id: "calcium_chloride", canonicalId: "calcium_chloride", name: "Cloruro de calcio" }
      ] }
    ]
  }
];
