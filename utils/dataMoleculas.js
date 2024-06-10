const moleculas = [
    {
        nombre: "Ácido Cítrico",
        composicion: "C₆H₈O₇",
        elementos: ["C", "H", "O"],
        aplicaciones: ["Aditivo alimentario", "Limpiador", "Cosméticos"]
    },
    {
        nombre: "Acetona",
        composicion: "C₃H₆O",
        elementos: ["C", "H", "O"],
        aplicaciones: ["Disolvente", "Removedor de esmalte de uñas", "Producción de plásticos"]
    },
    {
        nombre: "Ácido Láctico",
        composicion: "C₃H₆O₃",
        elementos: ["C", "H", "O"],
        aplicaciones: ["Conservante de alimentos", "Industria farmacéutica", "Producción de bioplásticos"]
    },
    {
        nombre: "Ácido Salicílico",
        composicion: "C₇H₆O₃",
        elementos: ["C", "H", "O"],
        aplicaciones: ["Tratamiento del acné", "Exfoliante", "Preservante de alimentos"]
    },
    {
        nombre: "Percloroetileno",
        composicion: "C₂Cl₄",
        elementos: ["C", "Cl"],
        aplicaciones: ["Limpieza en seco", "Desengrasante", "Desinfectante"]
    },
    {
        nombre: "Nitroglicerina",
        composicion: "C₃H₅N₃O₉",
        elementos: ["C", "H", "N", "O"],
        aplicaciones: ["Explosivo", "Medicamento para la angina de pecho", "Tratamiento de la insuficiencia cardíaca"]
    },
    {
        nombre: "Tetracloruro de Carbono",
        composicion: "CCl₄",
        elementos: ["C", "Cl"],
        aplicaciones: ["Disolvente", "Refrigerante", "Agente extintor"]
    },
    {
        nombre: "Ácido Cítrico",
        composicion: "C₆H₈O₇",
        elementos: ["C", "H", "O"],
        aplicaciones: ["Aditivo alimentario", "Limpiador", "Cosméticos"]
    },
    {
        nombre: "Acetato de Sodio",
        composicion: "C₂H₃NaO₂",
        elementos: ["C", "H", "O", "Na"],
        aplicaciones: ["Buffer", "Aditivo alimentario", "Tratamiento del agua"]
    },
    {
        nombre: "Ácido Fórmico",
        composicion: "CH₂O₂",
        elementos: ["C", "H", "O"],
        aplicaciones: ["Conservante de alimentos", "Producción de cuero", "Control de plagas"]
    },
    {
        nombre: "Fenol",
        composicion: "C₆H₅OH",
        elementos: ["C", "H", "O"],
        aplicaciones: ["Desinfectante", "Producción de plásticos", "Química orgánica"]
    },
    {
        nombre: "Ácido Ascórbico (Vitamina C)",
        composicion: "C₆H₈O₆",
        elementos: ["C", "H", "O"],
        aplicaciones: ["Suplemento vitamínico", "Antioxidante", "Conservante de alimentos"]
    },
    {
        nombre: "Cloroformo",
        composicion: "CHCl₃",
        elementos: ["C", "H", "Cl"],
        aplicaciones: ["Anestésico", "Solvente", "Producción de plásticos"]
    },
    {
        nombre: "Ácido Láurico",
        composicion: "C₁₂H₂₄O₂",
        elementos: ["C", "H", "O"],
        aplicaciones: ["Fabricación de jabones", "Cosméticos", "Industria alimentaria"]
    },
    {
        nombre: "Ácido Sulfhídrico",
        composicion: "H₂S",
        elementos: ["H", "S"],
        aplicaciones: ["Industria petroquímica", "Tratamiento de aguas residuales", "Metalurgia"]
    },
    {
        nombre: "Acrilamida",
        composicion: "C₃H₅NO",
        elementos: ["C", "H", "N", "O"],
        aplicaciones: ["Industria alimentaria", "Tratamiento de aguas", "Producción de polímeros"]
    },
    {
        nombre: "Ácido Glutámico",
        composicion: "C₅H₉NO₄",
        elementos: ["C", "H", "N", "O"],
        aplicaciones: ["Potenciador del sabor", "Suplemento alimenticio", "Producción de plásticos"]
    },
    {
        nombre: "Agua",
        composicion: "H₂O",
        elementos: ["H", "O"],
        aplicaciones: ["Consumo humano", "Uso doméstico", "Industrial"]
    },
    {
        nombre: "Dióxido de Carbono",
        composicion: "CO₂",
        elementos: ["C", "O"],
        aplicaciones: ["Respiración celular", "Bebidas carbonatadas", "Extintores de incendio"]
    },
    {
        nombre: "Oxígeno",
        composicion: "O₂",
        elementos: ["O"],
        aplicaciones: ["Respiración", "Medicina", "Industrial"]
    },
    {
        nombre: "Cloruro de Sodio",
        composicion: "NaCl",
        elementos: ["Na", "Cl"],
        aplicaciones: ["Cocina", "Uso industrial", "Deshielo"]
    },
    {
        nombre: "Dióxido de Silicio",
        composicion: "SiO₂",
        elementos: ["Si", "O"],
        aplicaciones: ["Construcción", "Electrónica", "Cosméticos"]
    },
    {
        nombre: "Metano",
        composicion: "CH₄",
        elementos: ["C", "H"],
        aplicaciones: ["Combustible", "Industria química", "Agricultura"]
    },
    {
        nombre: "Amoníaco",
        composicion: "NH₃",
        elementos: ["N", "H"],
        aplicaciones: ["Fertilizantes", "Productos de limpieza", "Refrigerantes"]
    },
    {
        nombre: "Glucosa",
        composicion: "C₆H₁₂O₆",
        elementos: ["C", "H", "O"],
        aplicaciones: ["Fuente de energía", "Alimentos", "Metabolismo celular"]
    },
    {
        nombre: "Etanol",
        composicion: "C₂H₅OH",
        elementos: ["C", "H", "O"],
        aplicaciones: ["Bebidas alcohólicas", "Desinfectantes", "Solventes"]
    },
    {
        nombre: "Ácido Acético",
        composicion: "CH₃COOH",
        elementos: ["C", "H", "O"],
        aplicaciones: ["Vinagre", "Producción de acetato", "Conservantes"]
    },
    {
        nombre: "Sulfato de Calcio",
        composicion: "CaSO₄",
        elementos: ["Ca", "S", "O"],
        aplicaciones: ["Construcción (yeso)", "Medicina (yeso para fracturas)", "Desecantes"]
    },
    {
        nombre: "Ácido Clorhídrico",
        composicion: "HCl",
        elementos: ["H", "Cl"],
        aplicaciones: ["Industria química", "Limpieza de metales", "Digestión (jugos gástricos)"]
    },
    {
        nombre: "Cloruro de Potasio",
        composicion: "KCl",
        elementos: ["K", "Cl"],
        aplicaciones: ["Fertilizantes", "Suplementos dietéticos", "Electrolitos"]
    },
    {
        nombre: "Sulfato de Magnesio",
        composicion: "MgSO₄",
        elementos: ["Mg", "S", "O"],
        aplicaciones: ["Sales de Epsom", "Medicina (laxante)", "Agricultura (fertilizante)"]
    },
    {
        nombre: "Bicarbonato de Sodio",
        composicion: "NaHCO₃",
        elementos: ["Na", "H", "C", "O"],
        aplicaciones: ["Levadura para hornear", "Antiácido", "Limpieza"]
    },
    {
        nombre: "Peróxido de Hidrógeno",
        composicion: "H₂O₂",
        elementos: ["H", "O"],
        aplicaciones: ["Desinfectante", "Blanqueador", "Tratamiento de heridas"]
    },
    {
        nombre: "Sulfato de Cobre",
        composicion: "CuSO₄",
        elementos: ["Cu", "S", "O"],
        aplicaciones: ["Agricultura (fungicida)", "Electrólisis", "Industria química"]
    },
    {
        nombre: "Ácido Sulfúrico",
        composicion: "H₂SO₄",
        elementos: ["H", "S", "O"],
        aplicaciones: ["Baterías de automóviles", "Industria química", "Tratamiento de aguas"]
    },
    {
        nombre: "Nitrato de Sodio",
        composicion: "NaNO₃",
        elementos: ["Na", "N", "O"],
        aplicaciones: ["Fertilizantes", "Conservantes de alimentos", "Explosivos"]
    },
    {
        nombre: "Monóxido de Carbono",
        composicion: "CO",
        elementos: ["C", "O"],
        aplicaciones: ["Procesos industriales", "Producción de acero", "Combustión incompleta"]
    },
    {
        nombre: "Metanol",
        composicion: "CH₃OH",
        elementos: ["C", "H", "O"],
        aplicaciones: ["Solvente", "Combustible", "Producción de formaldehído"]
    },
    {
        nombre: "Ácido Nítrico",
        composicion: "HNO₃",
        elementos: ["H", "N", "O"],
        aplicaciones: ["Fertilizantes", "Explosivos", "Industria química"]
    },
    {
        nombre: "Ácido Fosfórico",
        composicion: "H₃PO₄",
        elementos: ["H", "P", "O"],
        aplicaciones: ["Fertilizantes", "Refrescos", "Tratamiento de superficies metálicas"]
    },
    {
        nombre: "Hidróxido de Sodio",
        composicion: "NaOH",
        elementos: ["Na", "O", "H"],
        aplicaciones: ["Jabones", "Limpiadores de desagües", "Industria papelera"]
    },
    {
        nombre: "Hidróxido de Calcio",
        composicion: "Ca(OH)₂",
        elementos: ["Ca", "O", "H"],
        aplicaciones: ["Construcción (mortero)", "Tratamiento de aguas", "Neutralización de ácidos"]
    },
    {
        nombre: "Sulfato de Aluminio",
        composicion: "Al₂(SO₄)₃",
        elementos: ["Al", "S", "O"],
        aplicaciones: ["Tratamiento de aguas", "Fabricación de papel", "Astringente"]
    },
    {
        nombre: "Ácido Bórico",
        composicion: "H₃BO₃",
        elementos: ["H", "B", "O"],
        aplicaciones: ["Antiséptico", "Insecticida", "Vidrio borosilicato"]
    },
    {
        nombre: "Hidróxido de Amonio",
        composicion: "NH₄OH",
        elementos: ["N", "H", "O"],
        aplicaciones: ["Productos de limpieza", "Fertilizantes", "Procesamiento de alimentos"]
    },
    {
        nombre: "Nitrato de Plata",
        composicion: "AgNO₃",
        elementos: ["Ag", "N", "O"],
        aplicaciones: ["Fotografía", "Medicina (antiséptico)", "Química analítica"]
    }
];

export{ moleculas }
