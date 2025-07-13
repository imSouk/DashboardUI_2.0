function Card({ children }) {
  return (
    <div className="flex w-[500px] h-[300px] flex-col gap-4 rounded-lg bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {children}
    </div>
  );
}
export default Card;
