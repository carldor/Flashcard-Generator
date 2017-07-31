var ClozeCard = function (text, cloze){
	if(this instanceof ClozeCard){
		this.cloze = cloze;
		this.partial = text.replace(cloze,'...');
		this.fullText = text;

		if(this.partial === this.fullText){
			console.log('ERROR: "' + cloze + '" does not appear in "' + text + '"!!!')
		}
	}else{
		return new ClozeCard(text,cloze);
	}
}

module.exports = ClozeCard;