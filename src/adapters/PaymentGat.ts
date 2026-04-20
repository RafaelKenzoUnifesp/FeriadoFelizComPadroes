export class PaymentGat {
    public pay(total: number): string {
        if (total <= 0) {
            return "Valor inválido para pagamento.";
        }
        console.log(`Processando pagamento via gateway para o valor de ${total.toFixed(2)}`);
        return "Pagamento realizado com sucesso.";
    }
}