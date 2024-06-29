# PATH and PS1 and environment variables

#export Path="/usr/local/opt/ruby/bin:$PATH"

# TODO: generalize with brew install
#export PATH=$PATH:~/DevTools/flutter/bin
#export PATH=$PATH:/Users/blake/Library/Android/sdk/cmdline-tools/latest/bin
#export PATH=$PATH:"/usr/local/opt/openjdk@17/bin"
#export PATH=$PATH:/Users/blake/Library/Android/sdk/emulator

#export LDFLAGS="-L/usr/local/opt/ruby/lib"
#export CPPFLAGS="-I/usr/local/opt/ruby/include"


#export ANDROID_HOME="/Users/blake/Library/Android/sdk"
#export JAVA_HOME="/usr/local/opt/openjdk@17"

export PS1='%3~%F{cyan}»%f'

# Helpful simple commands
#	config
alias settings='vim ~/.zshrc'
alias refresh='source ~/.zshrc'
alias vimrc='vim ~/.vimrc'
alias gitconfig="vim ~/.gitconfig"

#	QoL changes
alias cls=clear
alias l='ls -AG'
alias h='cd ~'
alias lsh='ls -AGoh'

# TODO: Kate
alias edit="subl"


alias py="python3"

# Silly
alias please="sudo"
alias whereami="pwd"
alias cat="bash-cat-with-cat/cat.sh" #TODO: localize

# Android specific
#alias droid="emulator -avd Pixel &> /dev/null &"
#alias tabDroid="emulator -avd Pixel14 &> /dev/null &"

# Functions
#	Git
function git-up () {
	# TODO: safety
	git discard
	git checkout master
	git fetch origin
	git pull
	git fetch upstream
	git merge upstream/master
	git reset upstream/master
	git push -f
}

#	Flutter
function validate () {
	make
	flutter test
	flutter analyze
}

#	Utility

# TODO: add space functions