import axios from "axios";

class ServiceForwarder {

     constructor(endPoint, router) {
          this.endPoint = endPoint;
          this.router = router;
          this.forward()

     }

     forward() {

          this.router.get(`/${this.endPoint}/`, (req, res) => {
               axios.get(`/${this.endPoint}/`).then((result) => {
                    res.status(200).json(result)
               })
          }); //* View All

          this.router.get(`/${this.endPoint}/:id`, (req, res) => {
               const id = request.params.id;
               axios.get(`/${this.endPoint}/${id}`).then((result) => {
                    res.status(200).json(result)
               })
          });//* View One

          this.router.post(`/${this.endPoint}/`, (req, res) => {
               axios.post(`/${this.endPoint}/`, { ...req.body }).then((result) => {
                    res.status(200).json(result)
               })
          });//* Create

          this.router.delete(`/${this.endPoint}/:id`, (req, res) => {
               const id = request.params.id;
               axios.delete(`/${this.endPoint}/${id}`).then((result) => {
                    res.status(200).json(result)
               })
          });//* Delete

          this.router.put(`/${this.endPoint}/:id`, (req, res) => {
               const id = request.params.id;
               axios.put(`/${this.endPoint}/${id}`).then((result) => {
                    res.status(200).json(result)
               })
          });//* Modify

     }

}

export default ServiceForwarder;