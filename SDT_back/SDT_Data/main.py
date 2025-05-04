from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from io import StringIO

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/players")
def read_local_csv():
    df = pd.read_csv("./data/jugadores_futbol.csv", encoding="UTF-8")
    return {"columns": df.columns.tolist(), "rows": df.to_dict(orient="records")}

@app.get("/matches")
def read_local_csv():
    df = pd.read_csv("./data/sd_tordoia_training_and_matches_final.csv", encoding="UTF-8")
    df = df.fillna(0)
    return {"columns": df.columns.tolist(), "rows": df.to_dict(orient="records")}