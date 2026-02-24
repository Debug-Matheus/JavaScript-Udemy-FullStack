//Estrutura
//Exercício - Validando um CPF (Algoritmo)
//705.484.450-52
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40  28  48  20  16  15  0 = 237

x = (70 * 10) + (0 * 9) + (40 * 8) + (28 * 7) + (48 * 6) + (40 * 5) + (44 * 4) + (50 * 3) + (0 * 2)

11- (237 % 11) = 5
11 - 5 = 6
11 - 6 = 5
Se o digito for maior que 9, ele se torna 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45  32  56  24  20  15  0  10 = 284

11 - (284 % 11) = 9
11 - 9 = 2
Se o digito for maior que 9, ele se torna 0
*/ 