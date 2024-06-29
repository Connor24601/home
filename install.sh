#!/usr/bin/env bash 

# config files
echo "symlinking from $PWD to $HOME..."
ln -Ffs "$PWD/.zshrc" $HOME
ln -Ffs "$PWD/.gitconfig" $HOME
ln -Ffs "$PWD/.vimrc" $HOME
echo "installing bash source at $HOME"
source "$HOME/.zshrc"



# homebrew
which -s "brew" && {
	echo "brew found"

	# essentials
	brew install "git"
	brew install "gh"

	# langs
	brew install "openJDK"
	brew install "python3"
	brew install "gcc"

	# libs
	brew install "ffmpeg"

}


# TODO: pip packages?


# fun settings
gh repo clone GuidoFe/bash-cat-with-cat
gh alias set web 'repo view -w'



echo "installation complete"
