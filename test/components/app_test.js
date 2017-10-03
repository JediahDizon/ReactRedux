import { renderComponent, expect } from "../test_helper";
import { Goals, Goal, AddGoal, RemoveGoal } from "../../src/components/Goals";

describe("Goals", () => {
	let component;
	
	beforeEach(() => {
		component = renderComponent(Goals);
	})
	
	it("contains a Goal", () => {
		expect(component).to.exist;
	})
})