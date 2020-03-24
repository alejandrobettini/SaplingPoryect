Feature: pruebas en AMS
    
    Background: iniciar sesion
        Given iniciar sesion en Sapling con "usuario" y "contraseña"
    Scenario: crear pregunta SAVI
        Then Ingresar a raptor item
        When Crear pregunta en SAVI  #TODO:hasta clcik en pantalla blanco
        And Guardar pregunta