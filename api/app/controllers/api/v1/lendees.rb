module API
  module V1
    class Lendees < Grape::API
      include API::V1::Defaults

      resource :lendees do

        desc "Return a lendee"
        params do
          requires :id, type: String, desc: "ID of the lendee"
        end
        get ":id", root: "lendee" do
          Lendee.where(id: permitted_params[:id]).first!
        end

      end
    end
  end
end
