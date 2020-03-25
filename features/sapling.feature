Feature: pruebas en AMS
    
    Background: iniciar sesion
        Given iniciar sesion en Sapling con usuario "raptoradmin" y contraseña "fasterthansixmill"
        
    Scenario: seleccion de 3 items
        When Seleccionar "3" items
        Then Ir a view selected items
        And Verificar que los "3" items figures
    
    Scenario: crear pregunta SAVI
        When Ingresar a raptor item
        Then Crear pregunta en SAVI
        And Guardar pregunta