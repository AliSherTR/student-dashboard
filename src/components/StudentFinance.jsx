import { financeCardData } from "../data";
import FinanceCard from "./FinanceCard";

export default function StudentFinance() {
    return (
        <div>
            <h3 className=" font-bold text-black mb-3 text-lg tracking-wider">
                Finance
            </h3>
            <div className=" flex gap-4">
                {financeCardData.map((item) => (
                    <FinanceCard
                        key={item.id}
                        imageSrc={item.image}
                        text={item.text}
                        amount={item.amount}
                        className={
                            item.id === 1
                                ? " box-content border-4 border-gradientPurple"
                                : ""
                        }
                    />
                ))}
            </div>
        </div>
    );
}
