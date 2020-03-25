Feature: pruebas en AMS
    
    Background: iniciar sesion
        Given iniciar sesion en Sapling con usuario "raptoradmin" y contraseña "fasterthansixmill"
        
    Scenario: crear pregunta SAVI
        When Ingresar a raptor item
        Then Crear pregunta en SAVI
        And Guardar pregunta