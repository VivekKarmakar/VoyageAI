from fastapi import FastAPI

app = FastAPI(
    title="VoyageAI AI Service",
    description="Agentic AI service for VoyageAI",
    version="1.0.0"
)


@app.get("/health")
def health():
    return {
        "success": True,
        "message": "VoyageAI AI service is running"
    }