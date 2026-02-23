import os
import sys

# Since api is now inside frontend/ alongside backend, 
# we just need to ensure the parent dir is in sys.path
current_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.dirname(current_dir)
if parent_dir not in sys.path:
    sys.path.append(parent_dir)

from backend.server import app

# Explicitly export the app for Vercel
app = app
