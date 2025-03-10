import ChartOverview from "@/components/chart";
import Sales from "@/components/sales";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
              Total de vendas em 30 dias
            </CardDescription>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">R$ 60.000,00</p>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total Despesas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4"/>
              
            </div>
            <CardDescription>
              Total de despesas em 30 dias
            </CardDescription>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">R$ 20.000,00</p>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Lucro
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
              Lucro atual
            </CardDescription>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">R$ 40.000,00</p>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total Pedidos
              </CardTitle>
              <ShoppingBag className="ml-auto w-4 h-4"/>
              
            </div>
            <CardDescription>
              Total de pedidos em 30 dias
            </CardDescription>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">65</p>
            </CardContent>
          </CardHeader>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview/>
        <Sales/>
      </section>
      
    </main>
  );
}
