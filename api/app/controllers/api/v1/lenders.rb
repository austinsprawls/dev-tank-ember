module API
  module V1
    class Lenders < Grape::API
      include API::V1::Defaults

      resource :lenders do

        desc "Return a lender"
        params do
          requires :id, type: String, desc: "ID of the lender"
        end
        get ":id", root: "lender" do
          Lender.where(id: permitted_params[:id]).first!
        end

        desc "Return all investments belonging to specified lender"
        params do
          requires :lender_id, type: String, desc: "ID of the lender"
        end
        get ":lender_id/investments", root: "investment" do
          Investment.where(lender_id: permitted_params[:lender_id])
        end

        desc "Return single investment belonging to specified lender"
        params do
          requires :lender_id, type: String, desc: "ID of the lender"
          requires :id, type: String, desc: "ID of the investment"
        end
        get ":lender_id/investments/:id", root: "investment" do
          Investment.where(
            id: permitted_params[:id],
            lender_id: permitted_params[:lender_id]
          )
        end

      end
    end
  end
end
