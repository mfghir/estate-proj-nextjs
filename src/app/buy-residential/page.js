import BuyResidentialPage from "@/template/BuyResidentialPage";

const BuyResidential = async () => {
  // next when the web is put on the host, http://localhost:3000/ must change to min address of site
  // بهتر است در کامپوننت های سرورساید از ای پی آی روت استفاده نکنیم(این مورد حالت تمرینی دارد)
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();

  if(data.error) return <h3>مشکلی پیش آمده است</h3>

  return <BuyResidentialPage data={data.data} />;
};

export default BuyResidential;
