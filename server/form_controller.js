module.exports = {
    createForm: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      console.log(req.body)
      dbInstance.create_form([ req.body.first_name, req.body.last_name, req.body.business_name, req.body.business_type, req.body.location_place, req.body.email, req.body.phone, req.body.message_text ])
        .then( (response) => res.status(200).send(response) )
        .catch( (err) => {
            console.log(err),
            res.status(500).send(err) 
        });
    },
    getForm: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.read_form()
          .then( form => res.status(200).send( form ) )
          .catch( () => res.status(500).send() );
      },
    
      updateForm: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.update_form([ req.body.first_name, req.body.last_name, req.body.business_name, req.body.business_type, req.body.location_place, req.body.email, req.body.phone, req.body.message_text ])
          .then( () => res.status(200).send() )
          .catch( () => res.status(500).send() );
      },
    
      deleteForm: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.delete_form([req.params.form_id])
          .then( () => res.status(200).send() )
          .catch( () => res.status(500).send() );
      }
}