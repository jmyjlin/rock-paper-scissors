Pseudocode

FUNCTION getComputerChoice
	SET randomNumber to a random number between 0 and 2

	CASE randomNumber OF
		0: RETURN rock
		1: RETURN paper
		2: RETURN scissors
	ENDCASE
ENDFUNCTION

FUNCTION getHumanChoice
	GET human’s choice of either rock, paper, or scissors
ENDFUNCTION

FUNCTION playGame
	INIT humanScore
	SET humanScore to 0

	INIT computerScore
	SET computerScore to 0

	FUNCTION playRound(humanChoice, computerChoice)
		IF computerChoice is rock and humanChoice is paper THEN
			PRINT You win! Paper beats Rock.
			INCREMENT humanScore by 1
		ELSE IF computerChoice is rock and humanChoice is scissors THEN
			PRINT You lose! Rock beats scissors.
			INCREMENT computerScore by 1
		ELSE IF computerChoice is paper and humanChoice is rock THEN
			PRINT You lose! Paper beats rock.
			INCREMENT computerScore by 1
		ELSE IF computerChoice is paper and humanChoice is scissors THEN
			PRINT You win! Scissors beats paper.
			INCREMENT humanScore by 1
		ELSE IF computerChoice is scissors and humanChoice is paper THEN
			PRINT You lose! Scissors beats paper.
			INCREMENT computerScore by 1
		ELSE IF computerChoice is scissors and humanChoice is rock THEN
			PRINT You win! Rock beats scissors.
			INCREMENT humanScore by 1
		ELSE
			PRINT It’s a tie! No one wins.
		ENDIF
	ENDFUNCTION

	FOR 0 up to 5
		INIT humanSelection
		SET humanSelection to CALL getHumanChoice
		
		INIT computerSelection
		SET computerSelection to CALL getComputerChoice

		CALL playRound with humanSelection and computerSelection
	ENDFOR
ENDFUNCTION

CALL playGame
