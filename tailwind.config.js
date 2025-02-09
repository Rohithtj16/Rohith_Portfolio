tailwind.config ={
    theme: { 
        extend:{
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },  
            fontFamily:{
                Roboto:["Roboto Condensed", "serif"],
                Sans:["PT Sans", "serif"]
            },
            animation:{
                spin_slow: 'spin 6s linear infinite',
            },
            colors:{
                lightHover:"#fcf4ff",
                darkHover:"#2a004a",
                darktheme:"#11001F"
            },
            boxShadow:{
                dark:"4px 4px 0 #000",
                white:"4px 4px 0 #fff"
            }
        }
    },
        darkMode:"selector"
}