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

      end
    end
  end
end
