import requests
import logging


APP_URL = "https://www.google.com"


logging.basicConfig(
    filename="app_health.log",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

def check_app_status():
    try:
        response = requests.get(APP_URL, timeout=5)
        status = response.status_code

        if status == 200:
            msg = f"Application is UP. Status: {status}"
            print(msg)
            logging.info(msg)
        else:
            msg = f"Application might be DOWN. Status: {status}"
            print(msg)
            logging.warning(msg)

    except requests.RequestException as error:
        msg = f"Application is DOWN. Error: {error}"
        print(msg)
        logging.error(msg)

if __name__ == "__main__":
    check_app_status()
