# Manual de Uso – Escáner de Puertos en Python

## 1. ¿Para qué sirve?

El programa revisa un rango de puertos de un equipo y le indica cuáles están **abiertos**, es decir, cuáles tienen un servicio esperando conexiones (por ejemplo, SSH en el puerto 22 o una página web en el 80).

> ⚠️ **Advertencia:** use el programa solo en su propio equipo, en una máquina virtual o en un laboratorio autorizado.

## 2. Requisitos

| Requisito | Detalle |
|---|---|
| Sistema operativo | Windows 10/11, Linux o macOS |
| Python | Versión 3.8 o superior |
| Editor (opcional) | Visual Studio Code |
| Git (opcional) | Para clonar el repositorio |
| Librerías externas | Ninguna (solo se usa `socket`, incluida en Python) |

Para comprobar que Python está instalado, abra una terminal y escriba:

```bash
python --version
```

*(En Linux/macOS use `python3 --version`.)*

![Captura 1 – Versión de Python](capturas/01_version_python.png)

## 3. Instalación

**Opción A – Clonar con Git**

```bash
git clone https://github.com/amarquez/scanner-puertos-python.git
cd scanner-puertos-python
```

**Opción B – Descargar ZIP**

1. Entre al repositorio en GitHub.
2. Pulse **Code → Download ZIP**.
3. Extraiga la carpeta y ábrala en Visual Studio Code (**Archivo → Abrir carpeta**).

![Captura 2 – Proyecto abierto en Visual Studio Code](capturas/02_proyecto_vscode.png)

## 4. Cómo iniciar la aplicación

Desde la terminal (o la terminal integrada de VS Code, **Ctrl + `**), dentro de la carpeta del proyecto:

```bash
python scanner_puertos.py
```

Aparecerá el encabezado del programa y comenzará a solicitar datos.

![Captura 3 – Pantalla de inicio](capturas/03_inicio.png)

## 5. Cómo ingresar la IP

Cuando aparezca `IP:`, escriba la dirección IPv4 del equipo a analizar y pulse **Enter**.

| Caso | IP a usar |
|---|---|
| Su propio equipo | `127.0.0.1` |
| Máquina virtual o equipo del laboratorio | La IP asignada, por ejemplo `192.168.1.10` |

Si escribe una IP incorrecta (por ejemplo `999.1.1.1`), el programa mostrará un error y volverá a preguntar.

![Captura 4 – Ingreso de la IP](capturas/04_ingreso_ip.png)

## 6. Cómo seleccionar el rango de puertos

- **Desde:** puerto inicial (mínimo 1).
- **Hasta:** puerto final (máximo 65535, y no menor al inicial).

Ejemplos de rangos:

| Objetivo | Desde | Hasta |
|---|---|---|
| Puertos comunes (bien conocidos) | 1 | 1024 |
| Prueba rápida | 1 | 100 |
| Rango completo | 1 | 65535 |

![Captura 5 – Ingreso del rango de puertos](capturas/05_ingreso_rango.png)

## 7. Cómo ejecutar el escaneo

Al ingresar el puerto final, el escaneo inicia automáticamente y se muestra `Escaneando...`. Cada puerto abierto aparece en pantalla apenas se detecta. Para cancelar, pulse **Ctrl + C**.

![Captura 6 – Escaneo en ejecución](capturas/06_escaneo.png)

## 8. Cómo interpretar los resultados

Ejemplo de salida:

```
Puerto 22 - ABIERTO (ssh)
Puerto 80 - ABIERTO (http)

RESUMEN
Puertos analizados: 100
Puertos abiertos: 2
Lista de puertos abiertos: 22, 80
Tiempo total: 0.85 segundos
```

| Elemento | Significado |
|---|---|
| `Puerto N - ABIERTO` | Hay un servicio aceptando conexiones en ese puerto |
| Nombre entre paréntesis | Servicio que usa habitualmente ese puerto (`ssh`, `http`, etc.) |
| `Puertos analizados` | Cantidad de puertos revisados (Hasta − Desde + 1) |
| `Puertos abiertos` | Cantidad de puertos que respondieron |
| Puerto no listado | Cerrado, o bloqueado por un firewall |

**Recomendación de seguridad:** todo puerto abierto es una posible superficie de ataque. Si el servicio no es necesario, debe desactivarse o bloquearse con el firewall.

![Captura 7 – Resumen de resultados](capturas/07_resumen.png)

## 9. Problemas frecuentes

| Problema | Solución |
|---|---|
| `python no se reconoce como comando` | Reinstale Python marcando *Add Python to PATH* o use `py` / `python3` |
| No aparece ningún puerto abierto | Verifique que el equipo tenga servicios activos y que el firewall no los bloquee |
| El escaneo es lento | Reduzca el rango de puertos |
| IP rechazada | Use el formato correcto: cuatro números de 0 a 255 separados por puntos |
