import os
import sys

# Add the project root to sys.path so we can import backend packages
current_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.dirname(current_dir)
sys.path.append(root_dir)

from backend.server import app

# Export for Vercel
app = app
