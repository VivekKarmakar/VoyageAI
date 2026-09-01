# VoyageAI Architecture

VoyageAI follows a multi-service architecture consisting of:

- React frontend
- Node.js and Express backend
- Python and FastAPI AI service
- Supabase PostgreSQL database
- Agentic AI workflows

The frontend communicates with the backend API.

The backend communicates with the AI service when AI processing is required.

The AI service communicates with AI models, external tools and database services.
