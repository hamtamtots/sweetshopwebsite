import subprocess
import sys

subprocess.call(['npm', 'install'])
subprocess.call(['node_modules/gulp/bin/gulp.js'])
subprocess.call([sys.executable, 'manage.py', 'collectstatic', '--noinput'])