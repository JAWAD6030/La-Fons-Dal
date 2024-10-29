CREATE TABLE panier(
	IDclient INT REFERENCES Client(client_id) , 
	FOREIGN KEY (IDclient) REFERENCES Client (client_id),
	IDmarchandises INT REFERENCES marchandises (marchandise_id) , 
	FOREIGN KEY (IDmarchandises) REFERENCES marchandises (marchandise_id),
	prix int,
	marque VARCHAR(50),
	typeMarchandise varchar (50)



)