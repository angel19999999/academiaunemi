#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Escáner de Puertos de Red (TCP Connect Scan)
============================================
Actividad de Seguridad Informática - Desarrollo de un escáner de puertos
utilizando Python y la biblioteca estándar `socket`.

Funcionamiento:
    Para cada puerto del rango indicado se intenta abrir una conexión TCP
    con `socket.connect_ex()`. Si la conexión se establece (código 0) el
    puerto se considera ABIERTO; en cualquier otro caso se considera
    cerrado o filtrado.

USO ÉTICO Y LEGAL:
    Escanee únicamente equipos propios, máquinas virtuales o laboratorios
    con autorización expresa. El escaneo de sistemas ajenos sin permiso
    puede constituir un delito informático.
"""

import ipaddress
import socket
import sys
import time
from concurrent.futures import ThreadPoolExecutor

# ----------------------------------------------------------------------------
# Configuración
# ----------------------------------------------------------------------------
PUERTO_MIN = 1
PUERTO_MAX = 65535
TIMEOUT = 0.5          # segundos de espera por cada intento de conexión
HILOS = 100            # conexiones simultáneas (acelera el escaneo)


# ----------------------------------------------------------------------------
# Validación de datos de entrada
# ----------------------------------------------------------------------------
def validar_ip(texto: str) -> str:
    """Valida que el texto sea una dirección IPv4 correcta y la devuelve."""
    try:
        ip = ipaddress.ip_address(texto.strip())
    except ValueError:
        raise ValueError("La dirección IP no es válida (ejemplo: 192.168.1.10).")
    if ip.version != 4:
        raise ValueError("Solo se admiten direcciones IPv4.")
    return str(ip)


def validar_puerto(texto: str, nombre: str) -> int:
    """Valida que el texto sea un número de puerto entre 1 y 65535."""
    try:
        puerto = int(texto.strip())
    except ValueError:
        raise ValueError(f"El puerto {nombre} debe ser un número entero.")
    if not PUERTO_MIN <= puerto <= PUERTO_MAX:
        raise ValueError(
            f"El puerto {nombre} debe estar entre {PUERTO_MIN} y {PUERTO_MAX}."
        )
    return puerto


def pedir_dato(mensaje: str, validador, *args):
    """Solicita un dato por teclado repitiendo hasta que sea válido."""
    while True:
        try:
            return validador(input(mensaje), *args)
        except ValueError as error:
            print(f"  [!] {error}")


# ----------------------------------------------------------------------------
# Lógica de escaneo
# ----------------------------------------------------------------------------
def escanear_puerto(ip: str, puerto: int) -> bool:
    """Devuelve True si el puerto TCP está abierto en la IP indicada."""
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.settimeout(TIMEOUT)
            return s.connect_ex((ip, puerto)) == 0
    except OSError:
        return False


def nombre_servicio(puerto: int) -> str:
    """Devuelve el nombre del servicio habitual del puerto (si se conoce)."""
    try:
        return socket.getservbyport(puerto, "tcp")
    except OSError:
        return "desconocido"


def escanear_rango(ip: str, inicio: int, fin: int) -> list:
    """Escanea el rango [inicio, fin] y devuelve la lista de puertos abiertos.

    Los resultados se muestran en orden ascendente a medida que se obtienen.
    """
    abiertos = []
    puertos = range(inicio, fin + 1)
    with ThreadPoolExecutor(max_workers=HILOS) as ejecutor:
        # `map` conserva el orden de los puertos
        for puerto, esta_abierto in zip(
            puertos, ejecutor.map(lambda p: escanear_puerto(ip, p), puertos)
        ):
            if esta_abierto:
                abiertos.append(puerto)
                print(f"Puerto {puerto} - ABIERTO ({nombre_servicio(puerto)})")
    return abiertos


# ----------------------------------------------------------------------------
# Interfaz de usuario
# ----------------------------------------------------------------------------
def mostrar_banner() -> None:
    print("=" * 50)
    print("              ESCÁNER DE PUERTOS")
    print("=" * 50)
    print("AVISO: use esta herramienta solo en equipos propios,")
    print("máquinas virtuales o laboratorios autorizados.")
    print("-" * 50)


def main() -> None:
    mostrar_banner()

    ip = pedir_dato("IP: ", validar_ip)
    inicio = pedir_dato("Desde (puerto inicial): ", validar_puerto, "inicial")
    while True:
        fin = pedir_dato("Hasta (puerto final): ", validar_puerto, "final")
        if fin >= inicio:
            break
        print("  [!] El puerto final debe ser mayor o igual al inicial.")

    print()
    print("ESCÁNER DE PUERTOS")
    print(f"IP: {ip}")
    print(f"Desde: {inicio}")
    print(f"Hasta: {fin}")
    print("Escaneando...")

    t0 = time.time()
    try:
        abiertos = escanear_rango(ip, inicio, fin)
    except KeyboardInterrupt:
        print("\nEscaneo cancelado por el usuario.")
        sys.exit(1)
    duracion = time.time() - t0

    total = fin - inicio + 1
    print()
    print("-" * 50)
    print("RESUMEN")
    print(f"Puertos analizados: {total}")
    print(f"Puertos abiertos: {len(abiertos)}")
    if abiertos:
        print("Lista de puertos abiertos: " + ", ".join(map(str, abiertos)))
    print(f"Tiempo total: {duracion:.2f} segundos")
    print("-" * 50)


if __name__ == "__main__":
    main()
