const Cheese = () => (
    <div className="bg-yellow-400 h-4 w-44 flex justify-center text-xs">
      Cheese
    </div>
  );
  const Tomato = () => <div className="bg-red-400 h-4 w-36 flex justify-center text-xs">
    Tomato
  </div>;
  const Lettuce = () => <div className="bg-green-400 h-4 w-40 flex justify-center text-xs">
    Lettuce
  </div>;
  const Meat = () => <div className="bg-amber-900 h-4 w-32 flex justify-center text-xs">
    Meat
  </div>;
  const Mayo = () => <div className="bg-white h-4 w-32 flex justify-center text-xs">
    Mayo
  </div>;
  const Sauce = () => <div className="bg-red-500 h-4 w-32 flex justify-center text-xs">
  Sauce
</div>;
  const Pickles = () => (
    <div className="flex gap-1 w-36">
      <div className="bg-green-500 h-4 w-full rounded-full flex justify-center text-xs">Pickle</div>
      <div className="bg-green-500 h-4 w-full rounded-full flex justify-center text-xs">Pickle</div>
    </div>
  );
  export const BreadTop = () => (
    <div className="bg-orange-200 h-8 w-40 rounded-tl-full rounded-tr-full" />
  );
  export const BreadBottom = () => (
    <div className="bg-orange-200 h-8 w-40 rounded-bl-full rounded-br-full" />
  );
  
  export const Ingredient = ({type, onClickX}) => (
    <div className="relative">
      <div onClick={onClickX} className="absolute -top-1 -right-2 text-[8px] bg-red-500 rounded-full w-4 h-4 flex justify-center items-center text-white cursor-pointer opacity-0 hover:opacity-100">
        X
      </div>
      {type === "cheese" && <Cheese />}
      {type === "meat" && <Meat />}
      {type === "lettuce" && <Lettuce />}
      {type === "tomato" && <Tomato />}
      {type === "pickles" && <Pickles />}
      {type === "mayo" && <Mayo />}
      {type === "sauce" && <Sauce />}
    </div>
  );