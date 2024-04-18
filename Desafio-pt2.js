// Este é o desafio 2 proposto pelo Felipão da DIO.
// Porem desta vez utilizarei switch case...
console.log (" Seja muito bem-vindo aventureiro " );

const nomeHeroi = " Gerimundo ";
let xpheroi = 11.000;
let patenteheroi ;

switch (true){
case xpheroi >= 0 && xpheroi <= 1.000:
patenteheroi =" Ferro ";
 break;

case xpheroi >= 1.001 && xpheroi<= 2.000:
    patenteheroi = " Bronze ";
    break;
    
    case xpheroi >= 2.001 && xpheroi <= 5.000:
    patenteheroi = " Prata ";
    break;
    
    case xpheroi >=5.001 && xpheroi <= 7.000:
       patenteheroi = " Ouro ";
       break;

    case xpheroi >= 7.001 && xpheroi<= 8.000:
        patenteheroi = " Platina Diamante  ";
        break;

        case xpheroi >= 8.001 && xpheroi <= 9.000:
        patenteheroi =" Ascendente  ";
        break;

        case xpheroi >= 9.001 && xpheroi<= 10.000:
            patenteheroi = " Imortal ";
            break;

            case xpheroi >=10.001:
                patenteheroi = " Radiante ";
                break;
                
                default:
                    patenteheroi = " Não se sabe ao certo ";
                    
            }
 
            
            
            console.log ( " O Herói de  nome: " + nomeHeroi + " está na Patente de:" + patenteheroi + " Parabéns pela sua conquista Aventureiro " );

 // ;) vai um charmizinho ao bom e velho estilo de games portateis 
console.log ( "                                        ");
console.log ( " - O Herói de  Nome: " + nomeHeroi );
console.log ( " - Está na Patente de: " + patenteheroi );
console.log ( " - Parabéns pela sua conquista Aventureiro " );
