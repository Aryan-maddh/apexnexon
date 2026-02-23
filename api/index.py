import os
import sys

# Add the project root to sys.path
current_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.dirname(current_dir)
if root_dir not in sys.path:
    sys.path.append(root_dir)

from backend.server import app

# Explicitly export the app for Vercel
app = app
