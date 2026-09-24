# Escáner de Puertos de Red en Python

Aplicación de consola desarrollada en **Python** con la biblioteca estándar **`socket`** que permite identificar qué puertos TCP están abiertos en un equipo dentro de un rango definido por el usuario.

Proyecto académico de la asignatura de **Seguridad Informática**.

> ⚠️ **Uso ético y legal:** utilice esta herramienta únicamente sobre equipos propios, máquinas virtuales o laboratorios con autorización expresa. Escanear sistemas ajenos sin permiso puede ser un delito.

## Características

- Ingreso de dirección IP (IPv4) con validación.
- Ingreso de puerto inicial y puerto final (1 a 65535) con validación.
- Escaneo TCP tipo *connect* mediante `socket.connect_ex()`.
- Escaneo concurrente con hilos (`ThreadPoolExecutor`) para mayor velocidad.
- Muestra cada puerto abierto junto con el nombre del servicio habitual.
- Resumen final: puertos analizados, puertos abiertos y tiempo total.
- Sin dependencias externas.

## Estructura del repositorio

```
scanner-puertos-python/
├── scanner_puertos.py   # Código fuente
├── README.md            # Este archivo
├── MANUAL_USO.md        # Manual de usuario con capturas
└── capturas/            # Imágenes usadas en el manual
```

## Requisitos

- Python 3.8 o superior
- Sistema operativo Windows, Linux o macOS
- (Opcional) Visual Studio Code y Git

## Ejecución

```bash
git clone https://github.com/amarquez/scanner-puertos-python.git
cd scanner-puertos-python
python scanner_puertos.py
```

En Linux/macOS puede ser necesario usar `python3`.

## Ejemplo de salida

```
ESCÁNER DE PUERTOS
IP: 192.168.1.10
Desde: 1
Hasta: 100
Escaneando...
Puerto 22 - ABIERTO (ssh)
Puerto 80 - ABIERTO (http)

--------------------------------------------------
RESUMEN
Puertos analizados: 100
Puertos abiertos: 2
Lista de puertos abiertos: 22, 80
Tiempo total: 0.85 segundos
--------------------------------------------------
```

## Cómo funciona

1. Se validan la IP y el rango de puertos.
2. Para cada puerto se crea un socket TCP con un *timeout* de 0,5 s.
3. `connect_ex()` devuelve `0` si la conexión se establece: el puerto está **abierto**.
4. Cualquier otro resultado (rechazo o sin respuesta) se considera cerrado o filtrado.
5. Se muestra el resumen de resultados.

## Limitaciones

- Solo escanea TCP (no UDP) y solo IPv4.
- No detecta versiones de servicios ni sistemas operativos.
- Un firewall puede hacer que un puerto aparezca como cerrado aunque el servicio exista.
- El *timeout* fijo puede requerir ajuste en redes lentas (constante `TIMEOUT`).

## Documentación

Consulte [MANUAL_USO.md](MANUAL_USO.md) para la guía paso a paso.

## Autores

- Angel Gregorio Marquez Fuentes – GitHub y documentación del repositorio
- Nombre del integrante 2 – Desarrollo del código
- Nombre del integrante 3 – Pruebas y manual de uso

## Licencia

Uso académico y educativo.
