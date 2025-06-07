import psutil
import logging

logging.basicConfig(
    filename='system_health.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

CPU_LIMIT = 80
MEMORY_LIMIT = 80
DISK_LIMIT = 90

def monitor_system():
    cpu = psutil.cpu_percent(interval=1)
    memory = psutil.virtual_memory().percent
    disk = psutil.disk_usage('/').percent

    issues = []

    if cpu > CPU_LIMIT:
        issues.append(f"CPU usage is high: {cpu}%")
    if memory > MEMORY_LIMIT:
        issues.append(f"Memory usage is high: {memory}%")
    if disk > DISK_LIMIT:
        issues.append(f"Disk usage is high: {disk}%")

    if issues:
        for issue in issues:
            print(issue)
            logging.warning(issue)
    else:
        msg = "System is healthy. All metrics are normal."
        print(msg)
        logging.info(msg)

if __name__ == "__main__":
    monitor_system()
