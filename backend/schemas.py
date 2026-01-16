from pydantic import BaseModel

class ExpenseCreate(BaseModel):
    title: str
    amount: float
    date: str

class ExpenseResponse(ExpenseCreate):
    id: int

    class Config:
        orm_mode = True
