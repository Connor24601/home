import './BlobManager.ts'
import './../../resources/enums.ts'

class Blob
{
	// variables
	//string BlobEnumValue // TODO: decide if this should exist or be merged with id
							// considerations: duplicate of same blob

	Blob(id)
	{
		this.id = id;
		return;
	};

	id;
	//string defaultName
	//icon? defaultIcon
	//BlobType blobType
	
	
	


	//Dict<profileId, BlobAuth> BlobAuths
	//Set<profileId>? CollaborativeBlobUsers

	// methods
	// constructor(from JS)
	//bool removeAllBlobAuth()
	//bool addBlobAuth(BlobAuth) // BlobAuth should contain BlobEnum
	//bool removeBlobAuth(profileId)
	//bool addCollaborativeUser(profileId)
	//bool removeCollaborativeUser(profileId)
	//bool removeAllCollaborativeUsers()

}