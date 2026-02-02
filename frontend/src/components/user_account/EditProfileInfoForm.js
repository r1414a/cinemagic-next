import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
} from "@/components/ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export default function EditProfileInfoForm() {
    return (
        <form>
            <FieldGroup>
                <FieldSet>
                    <div className="flex gap-2 items-center border-b border-dyellow pb-2">
                        <FieldDescription className="text-white/80 font-bold">
                            The information can be edited!.
                        </FieldDescription>
                    </div>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="full_name">Full Name</FieldLabel>
                            <Input
                                id="full_name"
                                type="text"
                                placeholder="Rupesh Chincholkar"
                                className="border border-lightpurple placeholder:text-white/15"
                                required
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <Input
                                id="email"
                                type="email"
                                placeholder="rupeshchincholkar123@gmail.com"
                                className="border border-lightpurple placeholder:text-white/15"
                                required
                            />
                        </Field>
                        <Field orientation="horizontal">
                            <Button type="submit" className="bg-dyellow text-black hover:bg-dyellow/80">Save details</Button>
                        </Field>
                    </FieldGroup>
                </FieldSet>
            </FieldGroup>
        </form>
    )
}